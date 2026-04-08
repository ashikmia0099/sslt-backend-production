import { Router } from "express";
import { Donation_Text_and_AmountController } from "./Donation_Text_and_Amount.controller";


const router = Router()


router.get("/", Donation_Text_and_AmountController.getDonationTextandAmount)
router.post("/", Donation_Text_and_AmountController.postDonationTextandAmount) 
router.delete("/:id", Donation_Text_and_AmountController.deleteDonationTextandAmount) 
router.patch("/:id", Donation_Text_and_AmountController.updateDonationTextandAmount) 

export const Donation_Text_and_AmountRouter = router