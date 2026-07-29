import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const MONGO_URL = process.env.MONGO_URL

const ConnectDB = async()=>{
      
    try{

        await mongoose.connect(`${MONGO_URL}/video_uploader`)

        console.log('mongodb is connected')

    }
    catch(er){
        console.log(`Error while starting the mongodb , ${er}`)
    }
}

export default ConnectDB;