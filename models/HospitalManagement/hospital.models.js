import mongoose from "mongoose"
const hospitalSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  addressLine1:{
    type:String,
    required:true
  },
  addressLine2:{
    type:String,
    required:true
  },
  city:{
    type:String,
    required:true
  },
  pincode:{
    type:String,
    required:true
  },
  specialLisedIn:[
    {
      type:String
    }
  ]
},{timestamps:true});
export const Hospital=mongoose.models("Hospital",hospitalSchema)