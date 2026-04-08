import { Router } from "express";
import { DonationFaqController } from "./Donation_Faq.controller";

const router = Router();

router.get('/', DonationFaqController.getDonationFaq)
router.post('/', DonationFaqController.postDonationFaq)
router.patch('/:id', DonationFaqController.updateDonationFaq)
router.delete('/:id', DonationFaqController.deleteDonationFaq)

export const DonationFaqRouter = router;