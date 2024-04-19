import { Router } from "express";

export const router = Router();

//import all controllers

import * as controller from '../Controllers/appController.js'


/*** POST ROUTE **/
//register user
router.route("/register").post(controller.register);
// send email to users
router.route("/registerMail").post();
// authenticate users
router.route("/authenticate").post((req, res) => {
  res.json("register route");
});
//logged in user
router.route("/login").post(controller.login);

/*** GET ROUTES ***/
router.route("/user/:username").get(controller.getUser);
router.route("/generateOTP").get(controller.generateOTP);
router.route("/verifyOTP").get(controller.verifyOTP);
router.route("/createResetSession").get(controller.createResetSession);

/*** PUT ROUTES **/

router.route("/updateuser").put(controller.updateuser);
router.route("/resetPassword").put(controller.resetPassword);
