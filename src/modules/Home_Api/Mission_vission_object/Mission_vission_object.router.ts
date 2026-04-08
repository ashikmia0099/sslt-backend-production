import express, { Router, } from 'express';
import upload from '../../../middleware/multer';
import { MissionVissionObjectController } from './Mission_vission_object.controller';


const router =  express.Router()

router.get('/', MissionVissionObjectController.Mission_vission_object_Get )
router.post("/", upload.single("image"), MissionVissionObjectController.Mission_vission_object_Post);
router.patch("/:id", upload.single("image"), MissionVissionObjectController.updateMissionVissionObject);
router.delete("/:id", MissionVissionObjectController.deleteMissionVissionObject);


export const MissionVissionObjectRouter = router