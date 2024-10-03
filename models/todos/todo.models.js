import mongoose from 'mongoose';
const subTodoschema = new mongoose.Schema({
  content:{
    type:String,

    required:true,

  },
  complete:{
    type:Boolean,
    default:false
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  subTodos:[
    {
     type:mongoose.Schema.Types.ObjectId,
     ref:"SubTodo"
    }
  ]// aray of sub todos

}, { timestamps: true });
export const SubTodo = mongoose.model('SubTodo', subTodoschema);
