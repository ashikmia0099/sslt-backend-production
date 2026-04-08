import { Router } from "express";
import upload from "../../middleware/multer";
import { GalleryController } from "./Gallary.controller";


const router = Router()


router.get("/", GalleryController.getGallery)
router.post(
    "/",
    upload.fields([
        { name: "image", maxCount: 1 },
        { name: "dynamicImages", maxCount: 10 }
    ]),
    GalleryController.postGallery
);
router.patch("/:id",
    upload.fields([
        { name: "image", maxCount: 1 },
        { name: "dynamicImages", maxCount: 10 }
    ]),
    GalleryController.updateGallery
);
router.delete("/:id", GalleryController.deleteGallery)

export const GallaryRouter = router