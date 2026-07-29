import mongoose from "mongoose";


const metadata_schema = new mongoose.Schema({
     
    title : {type : String , required : true},
    path : {type : String , required : true},
    size : {type  : String , required :true},


})


const metadata = mongoose.model('metadata' , metadata_schema);

export default metadata;