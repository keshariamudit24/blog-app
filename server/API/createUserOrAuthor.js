// write the logic only once and can use it in both userAPI and authorAPI by exporting it
const userAuthor = require("../models/userAuthorModel")

async function createUserOrAuthor(req, res) {
    
    // get the user or author from req body 
    const  userAuthorInput = req.body;
    // get the user from the database by checking the email id
    const userAuthorDB = await userAuthor.findOne({ email: userAuthorInput.email });
    
    if(userAuthorDB !== null){
        // if the user exists 
        if(userAuthorInput.role === userAuthorDB.role){
            // if the roles are same 
            res.status(200).send({msg: userAuthorInput.role, payload: userAuthorInput })    
        }
        else {
            // if there's a role mismatch 
            res.status(200).send({msg: "Invalid role, there's a mismatch" })
        }        
    }
    else {
        // if the user doesnt exist, create one 
        const createUserAuthor = new userAuthor(userAuthorInput);
        const savedUserAuthor = await createUserAuthor.save();
        res.status(201).send({msg: savedUserAuthor.role, payload: savedUserAuthor })
    }
}

module.exports = createUserOrAuthor;