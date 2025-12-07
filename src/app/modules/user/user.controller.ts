import { Request, Response } from "express";
import { catchAsync } from "../../middlewares/catchAsync";
import { UserService } from "./user.service";
import { sendResponse } from "../../middlewares/sendResponse";
import pick from "../../helper/pick";
import { userFilterableFields } from "./user.constant";

const createStudent = catchAsync(async (req: Request, res : Response) => {
    console.log("Student : ", req.body);
    const result = await UserService.createStudent(req);

    sendResponse(res, {
        statusCode : 201,
        success : true,
        message : "Student Created Successfully",
        data : result
    })
});

const getAllFromDB = catchAsync(async (req : Request, res : Response) => {
    const filter = pick(req.query, userFilterableFields) // searching, filtering
    const options = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]); // pagination and sorting
    const result = await UserService.getAllFromDB(filter, options);

    sendResponse(res, {
        statusCode : 201,
        success : true,
        message : "User retrieve Successfully",
        data : result
    })
})

export const UserController = {
    createStudent,
    getAllFromDB
}