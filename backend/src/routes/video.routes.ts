import express from  'express'
import { createUploadURL } from '../controller/video.controller.js';
const Video_Router = express.Router();

Video_Router.post('/upload' , createUploadURL);








export default Video_Router;