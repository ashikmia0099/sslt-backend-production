import { Router } from "express";
import { Communiction_HearingController } from "./Communiction_Hearing.controller";

const router = Router();

router.get('/', Communiction_HearingController.getCommuniction_Hearing)
router.post('/', Communiction_HearingController.postCommuniction_Hearing )
router.patch('/:id', Communiction_HearingController.updateCommunictionHearing )
router.delete('/:id', Communiction_HearingController.deleteCommunictionHearing )

export const Communiction_HearingRouter = router;