import express, { Router, } from 'express';
import { heroController } from './Hero.controller';
import upload from '../../../middleware/multer';


const router =  express.Router()

router.get('/', heroController.Home_Hero_Get )
router.post("/", upload.single("image"), heroController.Home_Hero_Post);
router.patch("/:id", upload.single("image"), heroController.updateHero);
router.delete('/:id', heroController.deleteHero)


export const heroRouter = router