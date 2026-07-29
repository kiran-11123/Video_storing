import  type { Request , Response } from "express";
import { upload_video_service } from "../services/video.service.js";



export const createUploadURL = async(req  :Request , res: Response)=>{
     
    try{

        const {title , fileName , mimeType ,size}  = req.body;

        if(!title || !fileName || !mimeType || !size){
             return res.status(400).json({
                  message: "title, fileName, mimeType and size are required",
             })
        }

        if(!mimeType.startsWith("video/")){
              return res.status(400).json({
        message: "Only video files are allowed",
      });
        }


        const {uploadURL , key} = await upload_video_service(title  ,fileName , mimeType ,size);

       
        return res.status(200).json({
            message : 'Upload url generated',
            uploadURL ,
            key
        })
        


     
    }
    catch(er){

        return res.status(500).json({
            message : 'Internal Server Error'
        })

    }
}