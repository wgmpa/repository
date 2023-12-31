import mongoose from "mongoose";


const userRepo = new mongoose.Schema (
    {
        email:{
            type: String,
            required: true,
            index:{
                unique: true
            }
        },

        password:{
            type: String,
            required: true
        }
    },
    {
        timestamps:true
    }
)

export default mongoose.model('User', userRepo)