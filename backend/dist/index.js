import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ConnectDB from './db_config/db.js';
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
await ConnectDB();
app.listen(5000, () => {
    console.log('server started');
});
//# sourceMappingURL=index.js.map