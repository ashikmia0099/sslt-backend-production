import express, { Router, } from 'express';
import upload from '../../../middleware/multer';
import { aboutBannerController } from './About_Banner.controller';


const router =  express.Router()

router.get('/', aboutBannerController.getAboutBanner )
router.post("/", upload.single("image"), aboutBannerController.postAboutBanner); 
router.patch("/:id", upload.single("image"), aboutBannerController.updateAboutBanner); 
router.delete("/:id", aboutBannerController.deleteAboutBanner);


export const aboutHeroRouter = router