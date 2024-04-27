const router = require("express").Router();

const bcrypt = require("bcryptjs");/*bcrypt is used for hashing and store password*/
const jwt = require("jsonwebtoken");/*jwt is way to send data between two parties securely*/ 
const multer = require("multer");
const upload = multer({ storage });
/*multer is used for uploading files*/

const User = require("../../models/User.js");

const storage= multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"public/uploads/")/* multer for file upload is configures and storing uploaded file in 'uploads' folder */
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)//use the orignal file name
    }
})

router.post("/register",upload.single(`ProfileImage`),async(req,res)=>{
    try {
        /*taking data from form */
        const {firstName,lastName,email,password}=req.body
        /*uploaded file is available as req.file */
        const ProfileImage =req.file
        if (!ProfileImage){
            return res.status(400).send("no file upoladed")
        }
        /*path to upload profile photo*/ 
        const ProfileImagePath=ProfileImage.path
        /*check if user exits*/
        const existingUser= await User.findOne({email})
        if(existingUser){
            return res.status(409).json({message:"user already exists"})
        }
        /*hass the password*/
        const salt = await bcrypt.genSalt()
        const hashedPassword=await bcrypt.hash(password,salt);
        /*create a new user*/
        const newUser =new User({
            firstName,
            lastName,
            email,
            password:hashedPassword,
            ProfileImagePath,
        });
        /*save the new user*/
        await newUser.save()
        /*send a sucessful message*/
        res.status(200).json({message:"user registered sucessfully!",user:newUser})
    } catch (error) {
        console.log(error)
        res.status(500).json ({message:"Registration failed!",error:error.message})
    }
})

