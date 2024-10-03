import mongoose from 'mongoose'
const productSchema=new mongoose.Schema({
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Category",
    required:true
  },
  createdby:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"

  },
  description:{
    type:String,
    required:true
  },
  name:{
    type:String,
    required:true
  },
  productImage:{
    type:String
  },
  price:{
    type:Number,
    default:0
  },
  stock:{
    type:Number,
    default:0
  }



},{timestamps:true})
export const Product=mongoose.models("Product",productSchema)