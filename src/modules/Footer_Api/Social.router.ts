import { Router } from "express";
import { socialController } from "./Social.controller";


const router = Router()

router.get("/", socialController.getSocial)
router.post("/", socialController.postSocial)
router.patch("/:id" ,socialController.patchSocial)
router.delete("/:id",socialController.deleteSocial)

export const socialRouter = router