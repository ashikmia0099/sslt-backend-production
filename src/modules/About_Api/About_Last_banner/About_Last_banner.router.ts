import express, { Router, } from 'express';
import upload from '../../../middleware/multer';
import { aboutLastBannerController } from './About_Last_banner.controller';


const router =  express.Router()

router.get('/', aboutLastBannerController.getAboutLastBanner )
router.post("/", upload.single("image"), aboutLastBannerController.postAboutLastBanner);
router.patch("/:id", upload.single("image"), aboutLastBannerController.updateAboutLastBanner);
router.delete("/:id", aboutLastBannerController.deleteAboutLastBanner);


export const aboutLastBannerRouter = router