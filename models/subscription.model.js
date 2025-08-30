import mongoose from "mongoose";


const subscriptionSchema = new mongoose.Schema({
    name: {
        type : String,
        required: [true, "Subscription name is required"],
        trim: true,
        minLength: 2,
        maxLength: 50
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: 0,
        max: 1000
    },
    
    
}, {timestamps : true})
