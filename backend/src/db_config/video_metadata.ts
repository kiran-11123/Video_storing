import mongoose, { Schema, Document } from "mongoose";


export interface IVideo extends Document{
     
    title : string,
    type : 'video' | 'image' | 'audio',
    path : string ,
    size : number,
    mimeType : string ,
    status : "Pending" | "Uploaded"

}

const metadata_schema = new Schema<IVideo>({
     
    title : {type : String , required : true},
    type : {
        type:String , 
        enum : ['video' ,'audio' ,'image'],
        required : true
     } , 
       path: {
        type: String,
        required: true
    },

   
     size: {
        type: Number,
        required: true
    },
     mimeType :{
        type :String,
        required : true
    },
    status : {
       
        type :String,
        enum : ['Pending' , 'Uploaded'],
        default : 'Pending'
    },


} ,{
    timestamps :true
})


const metadata = mongoose.model<IVideo>('metadata' , metadata_schema);

export default metadata;