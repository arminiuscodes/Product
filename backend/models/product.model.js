import mongoose from "mongoose";

const productSchema =mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
},{
    timestamps:true // crerated at and updated at fields
});
const Product = mongoose.model('Product',productSchema); // "Product = plural in database"
export default Product;