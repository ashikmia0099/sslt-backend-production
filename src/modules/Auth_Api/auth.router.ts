import { Router } from "express";
import { authController } from "./auth.controller";


const router = Router()

router.get("/",authController.getAllUser)
router.post("/register", authController.register)
router.get("/verify-email/:token", authController.verifyEmail);

router.post("/login", authController.login)
router.patch("/role/:id",authController.updateUserRole)
router.delete("/delete/:id", authController.deleteUser)


export const authRouter  = router