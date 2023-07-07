import express from "express";
import cors from "cors";
import { sample_events, sample_categories, sample_users } from "./data";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/events", (req, res) => {
    res.send(sample_events);
})

app.get("/api/events/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const events = sample_events.filter(event => event.name.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(events);
})

app.get("/api/events/category", (req, res) => {
    res.send(sample_categories);
})

app.get("/api/events/category/:categoryName", (req, res) => {
    const categoryName = req.params.categoryName;
    const events = sample_events.find(event => event.categories?.includes(categoryName));
    res.send(events);
})

app.get("/api/events/:eventId", (req, res) => {
    const eventId = req.params.eventId;
    const event = sample_events.find(event => event.id == eventId);
    res.send(event);
})

app.post("/api/users/login", (req, res) => {
    const {email, password} = req.body;
    const user = sample_users.find(user => user.email === email && user.password === password);

    if (user) {
        res.send(generateTokenResponse(user));
    } else {
        res.status(400).send("User name or password is invalid!");
    }
})

const generateTokenResponse = (user:any) => {
    const token = jwt.sign({
        email:user.email, isOrganizer:user.isOrganizer
    }, "SomeRandomText", {
        expiresIn:"30d"
    });
    
    user.token = token; 
    return user;
}

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})