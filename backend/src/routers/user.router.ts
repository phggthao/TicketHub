import { Router } from "express";
import { sample_users } from "../data";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { User, UserModel } from "../models/user.model";
import { HTTP_BAD_REQUEST } from "../constants/http_status";
import bcrypt from "bcryptjs";
import { OrderModel } from "../models/order.model";

const router = Router();

router.get("/seed", asyncHandler(
    async (req, res) => {
        const usersCount = await UserModel.countDocuments();
        if(usersCount > 0) {
            res.send("Seed is already done!");
            return;
        }

        await UserModel.create(sample_users);
        res.send("Seed is done!");
    }
))

router.post("/login", asyncHandler (
    async (req, res) => {
        const {email, password} = req.body;
        const user = await UserModel.findOne({email});
    
        if (user && (await bcrypt.compare(password, user.password))) {
            res.send(generateTokenResponse(user));
        } else {
            res.status(HTTP_BAD_REQUEST).send("User name or password is invalid!");            
        }
    }
))

router.post('/register', asyncHandler(
    async (req, res) => {
        const {name, email, password, phone, dob} = req.body;
        const user = await UserModel.findOne({email});
        if(user) {
            res.status(HTTP_BAD_REQUEST).send("A user with that email has already exist, please try another one!");
            return;
        }

        const encryptedPassword = await bcrypt.hash(password, 10);
        const newUser:User = {
            id:'',
            name,
            email,
            password: encryptedPassword,
            phone,
            dob,
            avatarUrl: "assets/avatar.png",
            isOrganizer: false
        }

        const dbUser = await UserModel.create(newUser);
        res.send(generateTokenResponse(dbUser));
    }
))

const generateTokenResponse = (user: User) => {
    const token = jwt.sign({
        id: user.id, email:user.email, isOrganizer:user.isOrganizer
    }, process.env.JWT_SECRET!, {
        expiresIn:"30d"
    });
     
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        dob: user.dob,
        isOrganizer: user.isOrganizer,
        token: token
    };
}

router.get("/profile/:userId", asyncHandler (
    async (req, res) => {
        const user = await UserModel.findById(req.params.userId);
        res.send(user);
    }
))

router.get("/orders/:userId", asyncHandler (
    async (req, res) => {
        const orders = await OrderModel.find({user: req.params.userId});
        res.send(orders);
    }
))

export default router;