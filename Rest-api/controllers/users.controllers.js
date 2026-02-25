const users = require("../Models/user.model");
const { v4: uuidv4 } = require('uuid');

// get all user
const getAllUser = (req,res)=>{
    res.status(200).json({users})
}
// create new user by post method
const createUser = (req,res)=>{
    const newUser ={
        id:uuidv4(),
    username: req.body.username,
    email: req.body.email,
    };
    users.push(newUser)

    res.status(200).json({users})
}
// update user by put method
const updateUser = (req,res)=>{
    const id = req.params.id

    res.status(200).json({message: id})
}

module.exports = {getAllUser,createUser,updateUser};