import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required:[true, "username is required"],
        unique:[true, "username must be unique"]
    },
    password:{
        type:String,
        required:[true, "Password is required"],
        unique: false,
    },
    email:{
        type: String,
        required:[true, "please provide a unique email"],
        unique:true
    },
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    mobile:{
        type: Number,
    },
    address:{
        type: String,
    },
    profile:{
        type: String,
    }
})

export default mongoose.model('User',UserSchema);
