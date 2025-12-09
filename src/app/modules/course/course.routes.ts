import { NextFunction, Request, Response, Router } from "express";
import { fileUploader } from "../../helper/fileUploader";
import { CourseValidation } from "./course.validation";
import { CourseController } from "./course.controller";


const router = Router();

router.post("/create-course",   fileUploader.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = CourseValidation.createCourseValidationSchema.parse(JSON.parse(req.body.data))
        return CourseController.courseCreate(req, res, next)
    });

export const CourseRouters = router;