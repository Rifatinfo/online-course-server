import { Request, Response } from "express";
import { catchAsync } from "../../middlewares/catchAsync";
import { sendResponse } from "../../middlewares/sendResponse";
import { courseService } from "./course.service";

const courseCreate = catchAsync(async (req: Request, res: Response) => {
  const result = await courseService.createCourse(req);
  
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Course Created Successfully",
    data: result,
  });
});

export const CourseController = {
  courseCreate,
};
