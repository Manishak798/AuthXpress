import UserModel from "../models/User.model.js";
import bcrypt from 'bcrypt';



/**POST
 * @param:{
"username":"example123",
"password":"pwd@123",
"email":"examp@gmail.com",
"firstname":"john",
"lastname":"doe",
"mobile":404040404040,
profilePhoto:"" 
}
**/

export async function register(req, res) {
    try {
        //check for existing user
       const { username, password, profile, email}= req.body ;
       const existUsername = new Promise((resolve,reject)=>{
        UserModel.findOne({username}, function(err, user){
            if(err) reject(new Error(err));
            if(user) reject({error: "Please use a unique username"});
            resolve();
        })
       })
       //check for existing email
       const existEmail = new Promise((resolve,reject)=>{
        UserModel.findOne({email}, function(err, user){
            if(err) reject(new Error(err));
            if(user) reject({error: "Please use a unique email"});
            resolve();
        })
       })
       Promise.all([existUsername,existEmail]).then(()=>{
            if(password){
                //use bcrypt lib to hash passwrd
            bcrypt.hash(password,10).then(hashedPassword=>{
           const user = new UserModel({
            username,
            password: hashedPassword,
            profile: profile || '',
            email:email
           });
           user.save().then(result=> res.status(201).send({'msg':'user created successfully'}) ).catch((error)=>{error})
            }).catch(error=>{
                return res.status(500).send({
                    error:"Enable to hashed password"
                })
            })
            }
       }).catch((error)=>{
        return res.status(500).send({
            error:error.message
        })
       })
    } catch (error) {
        return res.status(500).send(error);
    }
  
}

/**POST
 * @param
 * LOGIN:{
 * username:" ",
 * "password":" "
 * }
 * **/
export async function login(req, res) {
  res.json("login route");
}

export async function getUser(req, res) {
  res.json("login route");
}

/***PUT
 * @param
"id":"USER ID" 
**/
export async function updateuser(req,res){
    res.json('update route');
}

export async function generateOTP(req,res){
    res.json('update route');
}

export async function verifyOTP(req,res){
    res.json('update route');
}

//successfully redirect user when OTP is valid
export async function createResetSession(req,res){
    res.json('update route');
}

//reset password
export async function resetPassword(req,res){
    res.json('update route');
}

