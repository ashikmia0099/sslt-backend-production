import { AboutThreeBannerController } from './About_Three_Banner.controller';
import { Router } from "express";
import upload from "../../../middleware/multer";

const router = Router();


router.get('/', AboutThreeBannerController.getThreeBanner)
router.post('/',upload.single("Image"), AboutThreeBannerController.postThreeBanner)
router.patch('/:id',upload.single("Image"), AboutThreeBannerController.updateThreeBanner)
router.delete('/:id', AboutThreeBannerController.deleteThreeBanner)

export const AboutThreeBannerRouter = router

