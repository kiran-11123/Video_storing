import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import ConnectDB from './db_config/db.js'
import Video_Router from './routes/video.routes.js'



const app = express();
dotenv.config();
app.use(cors())
app.use(express.json())
await ConnectDB();

app.use('/api/video' , Video_Router);





app.listen(5000 , ()=>{
    console.log('server started')
})