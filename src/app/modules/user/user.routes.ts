import { NextFunction, Request, Response, Router } from "express";
import { UserController } from "./user.controller";
import { fileUploader } from "../../helper/fileUploader";
import { UserValidation } from "./user.validation";

const router = Router();
router.post("/create-student",   fileUploader.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = UserValidation.createStudentValidationSchema.parse(JSON.parse(req.body.data))
        return UserController.createStudent(req, res, next)
    });


export const UserRouters = router;