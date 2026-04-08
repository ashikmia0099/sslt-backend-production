import { Router } from "express";
import { NewsController } from "./News.controller";
import upload from "../../middleware/multer";


const router = Router()


router.get("/", NewsController.getNews)
router.post("/", upload.single('image'), NewsController.postNews)
router.patch("/:id",upload.single("image"), NewsController.updateNews)
router.delete("/:id",NewsController.deleteNews)

export const NewsRouter = router