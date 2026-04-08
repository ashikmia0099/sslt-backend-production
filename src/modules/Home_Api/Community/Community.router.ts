import { Router } from "express";
import upload from "../../../middleware/multer";
import { CommunityController } from "./Community.controller";


const router = Router()


router.get("/", CommunityController.getCommunityController)
router.post("/", upload.single('image'), CommunityController.createCommunityController)
router.patch("/:id", upload.single('image'), CommunityController.updateCommunity)
router.delete("/:id", CommunityController.deleteCommunity)

export const CommunityRouter = router