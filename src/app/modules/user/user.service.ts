import { NextFunction, Request } from "express";
import { prisma } from "../../config/db";
import { createStudentInput } from "./user.interface";
import bcrypt from "bcryptjs";
import { fileUploader } from "../../helper/fileUploader";

const createStudent = async ( req: Request) => {
   let profilePhotoUrl: string | undefined;

  // 1️⃣ Upload file to Cloudinary if it exists
  if (req.file) {
    const uploadResult = await fileUploader.uploadToCloudinary(req.file);
    profilePhotoUrl = uploadResult?.secure_url;
  }

  const hashPassword = await bcrypt.hash(req.body.password, 10);

  // Start transaction
  const result = await prisma.$transaction(async (tx) => {
    // 1 Create the user
    const user = await tx.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        profilePhoto: profilePhotoUrl,
        role: "STUDENT",
      },
    });

    // 2 Create the student profile linked to the user email
    const student = await tx.student.create({
      data: {
        email: user.email,
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        profilePhoto: profilePhotoUrl,
      },
    });
    return user;
  });
  return result;
};

export const UserService = {
  createStudent
}

