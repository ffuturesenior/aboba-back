import mongoose from "mongoose";

const Parcipiant=new mongoose.Schema({
    userId:{type:String,required:true},
    chatId:{type:String,required:true},
    username:{type:String,required:true},
    isAdmin:{type:Boolean,required:true},
    isOwner:{type:Boolean,required:true}
})


export default mongoose.model('Parcipiant',Parcipiant)
