const express=require("express")
const router=express.Router()
const Food=require("../models/food")
//testt 
router.get("/",(req,res)=>{
    res.send("helloooooooo")
})

//add food
router.post("/addFood",async(req,res)=>{
    console.log(req.body,"hellooooo")
    const {foodName,imgURL,description,extras}=req.body
    
    const newfood=new Food({
        foodName,imgURL,description,extras
    })
   
  const food= await newfood.save()

  res.send({msg:"Food Added",food})
    
})
//delete food
router.delete("/deletefood/:_id",async(req,res)=>{
    const {_id}=req.params
    const food= await Food.findOneAndDelete({_id})
    res.send({msg:"user deleted",food})
})

//edit food

router.put("/editfood/:_id",async(req,res)=>{
    const{_id}=req.params
    const food=await Food.findByIdAndUpdate({_id},{$set:req.body},{new:true})
    res.send({msg:"Food Edited",food})
})
//fetch data
router.get("/getallfood",async(req,res)=>{
    const foods=await Food.find()
    res.send({msg:"contact fetched",foods})
})


module.exports=router