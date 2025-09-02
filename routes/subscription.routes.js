import { Router } from "express";
import authorize from "../middleware/auth.middleware.js";
import { createSubscription, getUserSubscriptions } from "../controllers/subscriptions.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {res.send({title : "GET all subscriptions"});});

subscriptionRouter.get('/:id', (req, res) => {res.send({title : "GET user subscriptions"});});

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/:id', (req, res) => {res.send({title : "UPDATE user subscriptions"});});

subscriptionRouter.delete('/:id', (req, res) => {res.send({title : "DELETE user subscriptions"});});

subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);

subscriptionRouter.put('/:id/cancel', (req, res) => {res.send({title : "CANCEL subscriptions"});});

subscriptionRouter.get('/upcoming-renewals', (req, res) => {res.send({title : "GET Upcoming subscriptions"});});

export default subscriptionRouter;