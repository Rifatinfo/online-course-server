import { NextFunction, Request } from "express";
import { prisma } from "../../config/db";
import bcrypt from "bcryptjs";
import { fileUploader } from "../../helper/fileUploader";

const createStudent = async (req: Request) => {
  let profilePhotoUrl: string | undefined;

  if (req.file) {
    const uploadResult = await fileUploader.uploadToCloudinary(req.file);
    profilePhotoUrl = uploadResult?.secure_url;
  }

  const hashPassword = await bcrypt.hash(req.body.password, 10);

  const result = await prisma.$transaction(async (tx) => {
    await tx.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        profilePhoto: profilePhotoUrl,
        role: "STUDENT",
      },
    });

    return  await tx.student.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        profilePhoto: profilePhotoUrl,
      },
    });

  });

  return result;
};


export const UserService = {
  createStudent
}

