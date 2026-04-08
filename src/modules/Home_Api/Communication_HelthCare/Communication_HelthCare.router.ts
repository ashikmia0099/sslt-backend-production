import { Router } from "express";
import upload from "../../../middleware/multer";
import { Communication_HelthCareController } from "./Communication_HelthCare.controller";


const router = Router()


router.get("/", Communication_HelthCareController.getCommunication_HelthCareController)
router.post("/", upload.single('image'), Communication_HelthCareController.createCommunication_HelthCare)
router.patch("/:id", upload.single('image'), Communication_HelthCareController.updateCommunicationHelthCare)
router.delete("/:id", Communication_HelthCareController.deleteCommunicationHelthCare)

export const Communication_HelthCare = router