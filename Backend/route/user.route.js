import express from 'express'
import {signup, login} from '../Controller/user.controller.js'
const router=express.Router();
//importing express router
//importing user controller
router.post("/signup",signup);
router.post("/login",login);
//defining routes for user signup and login
export default router;