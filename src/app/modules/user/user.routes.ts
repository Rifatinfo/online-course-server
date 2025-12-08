import { NextFunction, Request, Response, Router } from "express";
import { UserController } from "./user.controller";
import { fileUploader } from "../../helper/fileUploader";
import { UserValidation } from "./user.validation";
import auth from "../../middlewares/auth";
import { UserRole } from "../../../generated/prisma/enums";

const router = Router();
router.post("/create-student",   fileUploader.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = UserValidation.createStudentValidationSchema.parse(JSON.parse(req.body.data))
        return UserController.createStudent(req, res, next)
    });

router.get(
    "/", auth(UserRole.ADMIN),
    UserController.getAllFromDB
)

export const UserRouters = router;