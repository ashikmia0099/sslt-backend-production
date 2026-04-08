import { Router } from "express";
import upload from "../../../middleware/multer";
import { Donation_MediumController } from "./Donation_Medium.controller";


const router = Router()


router.get("/", Donation_MediumController.getDonationMedium)
router.post("/", upload.single('MFS_Bank_Image'), Donation_MediumController.postDonationMedium);
router.patch("/:id", upload.single('MFS_Bank_Image'), Donation_MediumController.updateDonationMedium)
router.delete("/:id", Donation_MediumController.deleteDonationMedium)

export const Donation_MediumRouter = router