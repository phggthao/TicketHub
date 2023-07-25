import { Router } from "express";
import asyncHandler from "express-async-handler";
import { UserModel } from "../models/user.model";
import { HTTP_BAD_REQUEST } from "../constants/http_status";
import { OrganizerModel, Organizer } from "../models/organizer.model";
import auth from '../middlewares/auth.mid';

const router = Router();
router.use(auth);

router.post("/register", asyncHandler (
    async (req: any, res: any) => {
        const {name, email, phone, city, district, ward, address} = req.body;

        const user = await UserModel.findById(req.user.id);
        if (user) {
            res.status(HTTP_BAD_REQUEST).send("You have already registered as an organizer");
            return;
        }

        const organizer = await OrganizerModel.findOne({email});
        if(organizer) {
            res.status(HTTP_BAD_REQUEST).send("An organizer with that email has already exist, please try another one!");
            return;
        }

        const newOrganizer: Organizer = {
            id: '',
            user: req.user.id,
            name,
            email,
            phone,
            city,
            district,
            ward,
            address
        };

        const updateUserRole = await UserModel.findById(req.user.id);
        if (!updateUserRole) {
            res.status(HTTP_BAD_REQUEST).send('User Not Found!');
            return; 
        } 
        updateUserRole.isOrganizer = true;
        await updateUserRole.save();

        const dbOrganizer = await OrganizerModel.create(newOrganizer);
        res.send(dbOrganizer);
    }
))

router.get("/profile/:id", asyncHandler (
    async (req, res) => {
        const organizer = await OrganizerModel.findOne({user: req.params.id});
        res.send(organizer);
    }
))

export default router;