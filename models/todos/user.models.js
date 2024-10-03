import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
  {
    //traditional way of declaring a data set
    // username:String,
    //email:String,
    //isActive:Boolean

    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const User = mongoose.model('User', userSchema);
// when this user store on mongodb its become users s is added at end
