import express from 'express'
import mongoose from 'mongoose'
import ProductRouter from './router/product.js'

const app = express();
app.use(express.json());
app.use('/api/vi', ProductRouter);
const connectDB = async() => {
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/api')
        console.log(`ket noi thanh cong`)
    } catch (error) {
        console.log(`ket noi k TC`)
    }
}
app.listen(4000, () => {
    connectDB();
    console.log(`Emdpoint http://localhost:4000`);
})