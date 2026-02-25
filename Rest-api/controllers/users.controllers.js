const users = require("../Models/user.model");

const getAllUser = (req,res)=>{
    res.status(200).json({users})
}

module.exports = {getAllUser};