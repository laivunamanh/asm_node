import ProductModel from "../model/product.js";
export const getAllProduct = async(req, res) => {
    try {
        const products = await ProductModel.find();
        return res.status(200).json({ status: true, data: products })
    } catch (error) {
        return res.status(503).json({ status: false, message: 'loi' })
    }
}
export const getProductById = async(req, res) => {
    try {
        const id = req.params.id;
        const products = await ProductModel.findById(id);
        return res.status(200).json({ status: true, data: products })
    } catch (error) {
        return res.status(503).json({ status: false, message: 'loi' })
    }
}
export const AddProduct = async(req, res) => {
    try {
        const body = req.body
        const productmodel = ProductModel(body);
        const products = await productmodel.save();
        return res.status(200).json({ status: true, data: products })
    } catch (error) {
        return res.status(503).json({ status: false, message: 'loi' })
    }
}
export const UpdateProduct = async(req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const products = await ProductModel.findOneAndUpdate({ _id: id }, body, { new: true });
        return res.status(200).json({ status: true, data: products, message: 'tc' })
    } catch (error) {
        return res.status(503).json({ status: false, message: 'loi' })
    }
}
export const DeleteProduct = async(req, res) => {
    try {

        const id = req.params.id;
        const products = await ProductModel.findOneAndDelete({ _id: id });
        return res.status(200).json({ status: true, data: products, message: 'tc' })
    } catch (error) {
        return res.status(503).json({ status: false, message: 'loi' })
    }
}