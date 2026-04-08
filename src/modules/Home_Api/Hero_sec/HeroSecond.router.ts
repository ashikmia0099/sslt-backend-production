import { Router } from "express"
import { HeroSecondController } from "./HeroSecond.controller"
import upload from "../../../middleware/multer"

const router = Router()


router.get('/', HeroSecondController.HeroSecondControllerGet)

router.post(
  "/",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "Choose_Dual_Type_Image_1", maxCount: 1 },
    { name: "Choose_Dual_Type_Image_2", maxCount: 1 } 
  ]),
  HeroSecondController.HeroSecondControllerPost
);

router.patch(
  "/:id",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "Choose_Dual_Type_Image_1", maxCount: 1 },
    { name: "Choose_Dual_Type_Image_2", maxCount: 1 } 
  ]),
  HeroSecondController.HeroSecondControllerPatch
);

router.delete('/:id', HeroSecondController.deleteSecondHero)

export const heroSecondRouter = router 