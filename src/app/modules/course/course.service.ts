import { prisma } from "../../config/db";
import { fileUploader } from "../../helper/fileUploader";
import { Request } from "express";

const createCourse = async (req: Request) => {
    let profilePhotoUrl: string | undefined;

    // upload image if exists
    if (req.file) {
        const uploadResult = await fileUploader.uploadToCloudinary(req.file);
        profilePhotoUrl = uploadResult?.secure_url;
    }

    // DB Transaction
    const newCourse = await prisma.course.create({

        data: {
            title: req.body.title,
            slug: req.body.slug,
            smallDescription: req.body.smallDescription,
            description: req.body.description,

            thumbnail: profilePhotoUrl ? profilePhotoUrl : "",
            duration: Number(req.body.duration),
            price: Number(req.body.price),

            category: req.body.category,
            course_Status: req.body.course_Status,
        },
    });

    console.log(newCourse);
    
    return newCourse;
};

export const courseService = {
    createCourse,
};


