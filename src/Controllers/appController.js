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

