import mongoose from "mongoose";


const repositoryHub = new mongoose.Schema (
    {
        name:{
            type: String,
            required: true,
        },

        url:{
            type: String,
            required: true,
            index:{
                unique: true
            }
        },
        userId:{
            type: String,
            required:true
        }
    },
    {
        timestamps:true
    }
)

export default mongoose.model('Repository', repositoryHub)