import { Request, Response } from "express";
import { catchAsync } from "../../middlewares/catchAsync";
import { UserService } from "./user.service";
import { sendResponse } from "../../middlewares/sendResponse";

const createStudent = catchAsync(async (req: Request, res : Response) => {
    console.log("Student : ", req.body);
    const result = await UserService.createStudent(req.body);

    sendResponse(res, {
        statusCode : 201,
        success : true,
        message : "Student Created Successfully",
        data : result
    })
});

export const UserController = {
    createStudent
}