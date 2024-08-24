import express from "express";
import { login, register, updateProfile ,logout } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
const router=express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile/update").post(isAuthenticated,updateProfile);  
router.route("/logout").get(logout) ;

export default router;    //we have to send this router 
