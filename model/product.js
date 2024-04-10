import mongoose from "mongoose";
const ProductSchame = mongoose.Schema({
    name: String,
    price: String,
    mota: String

}, {
    timestamps: true
})
const ProductModel = mongoose.model('products', ProductSchame)
export default ProductModel