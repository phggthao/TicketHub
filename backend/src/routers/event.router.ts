import { Router } from "express";
import { sample_events } from "../data";
import asyncHandler from "express-async-handler";
import { Event, EventModel } from "../models/event.model";
import auth from '../middlewares/auth.mid';
import { OrganizerModel } from "../models/organizer.model";
import { HTTP_BAD_REQUEST } from "../constants/http_status";
import { UserModel } from "../models/user.model";

const router = Router();
router.use(auth);

router.get("/seed", asyncHandler(
    async (req, res) => {
        const eventsCount = await EventModel.countDocuments();
        if(eventsCount > 0) {
            res.send("Seed is already done!");
            return;
        }

        await EventModel.create(sample_events);
        res.send("Seed is done!");
    }
))

router.get("/", asyncHandler (
    async (req, res) => {
        const events = await EventModel.find();
        res.send(events);
    }
))

router.get("/search/:searchTerm", asyncHandler(
    async (req, res) => {
        const searchRegex = new RegExp(req.params.searchTerm, 'i');
        const events = await EventModel.find({name: {$regex:searchRegex}})
        res.send(events);
    }
))

router.get("/categories", asyncHandler(
    async (req, res) => {
        const categories = await EventModel.aggregate([
            {
                $unwind:'$categories'
            },
            {
                $group:{
                    _id: '$categories',
                    count: {$sum: 1}
                }
            },
            {
                $project:{
                    _id: 0,
                    name: '$_id',
                    count: '$count'
                }
            }
        ]).sort({count: -1});

        res.send(categories);
    }
))

router.get("/category/:categoryName", asyncHandler (
    async (req, res) => {
        const events = await EventModel.find({categories: req.params.categoryName})
        res.send(events);
    }
))

router.get("/:eventId", asyncHandler (
    async (req, res) => {
        const event = await EventModel.findById(req.params.eventId);
        res.send(event);
    }
))

router.post("/create", asyncHandler (
    async (req: any, res: any) => {
        const {name, organizer, location, venue, date, categories, description, imageUrl, tickets} = req.body;

        await EventModel.deleteOne({
            organizer: organizer
        });

        const newEvent: Event = {
            id:'',
            name, 
            organizer,
            location, 
            venue, 
            date, 
            categories, 
            description, 
            imageUrl, 
            tickets,
            favorite: false
        }

        const dbEvent = await EventModel.create(newEvent);
        res.send(dbEvent);
    }
))

router.get("/my-events", asyncHandler (
    async (req: any, res) => {
        const events = await EventModel.find({organizer: req.organizer})
        res.send(events);
    }
))

export default router;