import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import eventRouter from "./routers/event.router";
import userRouter from "./routers/user.router";
import orderRouter from "./routers/order.router";
import { dbConnect } from "./configs/database.config";
import organizerRouter from "./routers/organizer.router";
dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/events", eventRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/organizers", organizerRouter);

const port = 5000; 
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})