const express=require("express")
const router=express.Router()
const User=require("../models/user")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const isAuth=require("../middleweares/isAuth")
const {loginRules,registerRules,validator} =require("../middleweares/validator")
//register User
router.post("/register",registerRules(),validator,async(req,res)=>{
    const{name,email,lastName,password}=req.body

    let user=await User.findOne({email})
    if(user){
        return res.send({msg:"email already exists"})
    }
user=new User({name,email,lastName,password})


const salt=10

const hashedPassword= await bcrypt.hash(password,salt)
user.password=hashedPassword
await user.save()

const payload={
    id:user._id
}
const token=jwt.sign(payload,"fghgdf",{expiresIn:"7 days"})

res.send({msg:"user created successfuly !! ",user,token})

})

//login user
router.post("/login",loginRules(),validator,async(req,res)=>{
    const{email,password}=req.body

let user=await User.findOne({email})

if(!user){
    return res.send({msg:"bad credentials !"})
}

const  passwordMatch=await bcrypt.compare(password,user.password)
if(!passwordMatch){
return res.send({msg:"bad credentials !"})
}

const payload={
    id:user._id
}
const token=jwt.sign(payload,"fghgdf",{expiresIn:"7 days"})

res.send({msg:`Si ${user.name} is connected`,user,token})

})

//get authorized user

router.get("/user",isAuth,(req,res)=>{
res.send({user:req.user})

})


module.exports=router