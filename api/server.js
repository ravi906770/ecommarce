import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan';
import connection from './config/db.js';
import authRoutes from './routes/authroute.js';
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import cors from "cors"

dotenv.config();

connection();

const app = express();


app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.use('/api/v1/auth' , authRoutes)
app.use('/api/v1/category' , categoryRoutes)
// app.use('api/v1/product' , productRoutes)
app.use("/api/v1/product", productRoutes);



app.get('/',(req,res)=>{
    res.send({
        message : "Welcome to the MERN application"
    })
})

//PORT

const PORT = process.env.PORT;

app.listen(PORT , ()=>{
    console.log(`server will running on ${PORT}`)
})