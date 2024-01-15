const mongoose=require("mongoose")
const schema=mongoose.Schema

const FoodSchema=new schema({
    foodName:{
        type:String
    },
    imgURL:{
        type:String
    },
    description:{
        type:String,

    },
    extras:{
        type: [String]
    }

})

module.exports=Food=mongoose.model("Foods",FoodSchema)