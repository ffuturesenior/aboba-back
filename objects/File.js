import mongoose from "mongoose";

const File=new mongoose.Schema({
    data:{type:String,required:true},
    specialId:{type:String,required:true},
})


export default mongoose.model('File',File)
