const express = require("express");
const connectToDb = require("./config/db");
const User = require("./models/users");
const schema  = require("./validations/userValidation");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");
app.use(express.json());
app.use(cors());
connectToDb();

app.get("/api/users",async (req,res)=>{
    try {
    const user = await User.find()
    res.status(200).json({
        data:user,
        message:"retirieved user succesfully"
    })
    } catch (error) {
        res.status(500).json({
            data:null,
            message:"no user found"
        })
    }
});
app.post("/api/users",async (req,res)=>{
    const { error, value } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  } else {
    const newUser = new User(value);
    await newUser.save();
    return res.status(200).json({
        message:"added",
        data:newUser
    })
  }
});

app.listen(PORT,()=>{
    console.log(`server runned on ${PORT}`);
    
})