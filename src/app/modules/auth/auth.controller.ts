import { Request, Response } from "express";
import { catchAsync } from "../../middlewares/catchAsync";
import { AuthService } from "./auth.service";
import { sendResponse } from "../../middlewares/sendResponse";

const login = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.login(req.body);
  const { accessToken, refreshToken} = result;
  
  res.cookie("accessToken", accessToken, {
    secure : true,
    httpOnly : true,
    sameSite : "none",
    maxAge : 1000 * 60 * 60
  })
  res.cookie("refreshToken", refreshToken, {
    secure : true,
    httpOnly : true,
    sameSite : "none",
    maxAge : 1000 * 60 * 60 * 24 * 90
  })

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "User Login successfully",
    data: {
     accessToken,
     refreshToken
    }
  })
})

export const AuthController = {
  login
}