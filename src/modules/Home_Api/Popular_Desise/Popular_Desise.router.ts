import { Router } from "express";
import { PopularDesisController } from "./Popular_Desise.controller";
import upload from "../../../middleware/multer";


const router = Router()


router.get("/", PopularDesisController.getPopularDesiesController)
router.post("/", upload.single('image'), PopularDesisController.createPopularDesiesController)
router.patch("/:id", upload.single('image'), PopularDesisController.updatePopularDesisService)
router.delete("/:id", PopularDesisController.deletePopularDesis)

export const PopularDesiseRouter = router