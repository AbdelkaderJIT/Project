const mongoose=require("mongoose")
const schema=mongoose.Schema

const UserSchema=new schema({
    name:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String,

    },
    password:{
        type:String
    }

})

module.exports=User=mongoose.model("Users",UserSchema)