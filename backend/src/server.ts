import express from "express";
import cors from "cors";
import { sample_events, sample_tags } from "./data";

const app = express();
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
    res.send(sample_tags);
})

app.get("/api/events/category/:categoryName", (req, res) => {
    const categoryName = req.params.categoryName;
    const events = sample_events.filter(event => event.category?.includes(categoryName));
    res.send(events);
})

app.get("/api/events/:eventId", (req, res) => {
    const eventId = req.params.eventId;
    const event = sample_events.filter(event => event.id == eventId);
    res.send(event);
})


const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})