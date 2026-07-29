import express from 'express'
import cors from 'cors'
import multer from 'multer'


const app = express();
app.use(cors())
app.use(express.json())







app.listen(5000 , ()=>{
    console.log('server started')
})