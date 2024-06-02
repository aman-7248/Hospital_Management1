import mongoose from "mongoose";
import validator from "validator";

const messageSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"First Name Must Contain At Least 3 Characters!"],
    },

    lastName:{
        type:String,
        required:true,
        minLength:[3,"First Name Must Contain At Least 3 Characters!"],
    }
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Please provide a valid Email"],
    },
    phone:{
        type:String,
        required:true,
        minLength:[11,"Phone number must contain exact 11 digits"],
        maxLength:[11,"Phone number must contain exact 11 digits"],
    }
    message:{
        type :String,
        required=true,
        minlength:[10,"Message must contain at least 10 chracters"],
    },

});
export const Message=mongoose.model("Message",messageSchema);


//next work to do is message controller
