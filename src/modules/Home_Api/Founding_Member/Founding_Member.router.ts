import { Router } from "express";
import upload from "../../../middleware/multer";
import { FoundingMemberController } from "./Founding_Member.controller";

const router = Router();

router.get('/', FoundingMemberController.FoundingMemberControllerGet)
router.post('/',upload.single("image"), FoundingMemberController.FoundingMemberControllerPost )
router.patch('/:id',upload.single("image"), FoundingMemberController.updateFoundingMember )
router.delete('/:id', FoundingMemberController.deleteFoundingMember )

export const Founding_MemberRouter = router;