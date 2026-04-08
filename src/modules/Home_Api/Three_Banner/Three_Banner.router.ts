import { Router } from "express";
import { ThreeBannerController } from "./Three_Banner.controller";
import upload from "../../../middleware/multer";

const router = Router();


router.get('/', ThreeBannerController.ThreeBannerControllerGet)
router.post('/',upload.single("Image"), ThreeBannerController.ThreeBannerControllerPost)
router.patch('/:id',upload.single("Image"), ThreeBannerController.updateThreeBanner)
router.delete('/:id', ThreeBannerController.deletethreeBanner)

export const ThreeBannerRouter = router

