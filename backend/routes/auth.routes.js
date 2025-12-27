import express from "express";

import { SignUp } from "../controllers/auth.controller.js";
import { login } from "../controllers/auth.controller.js";
import { logout } from "../controllers/auth.controller.js";
const authrouter = express.Router();
authrouter.post("/signup", SignUp);
authrouter.post("/login", login);
authrouter.post("/logout", logout);
export default authrouter;
