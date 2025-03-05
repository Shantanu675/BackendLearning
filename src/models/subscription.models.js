import mongoose  from "mongoose";

const subscriptionSchema = new Schema({
    subscriber: {
        type : Schema.Types.ObjectId,//who is subscribing
        ref : "User"
    },
    channel: {
        type : Schema.Types.ObjectId,//who is 'subscriber' subscribing
        ref : "User"
    }
},{timestamp : true})

export const Subscription = mongoose.model("Subscription", subscriptionSchema)