import { Router } from "express";
import upload from "../../middleware/multer";
import { ContactController } from "./Contract.controller";


const router = Router()


router.get("/", ContactController.getContact)
router.post("/", ContactController.postContact)
router.patch("/:id", ContactController.updateContact)
router.delete("/:id", ContactController.deleteContact)

export const ContactRouter = router