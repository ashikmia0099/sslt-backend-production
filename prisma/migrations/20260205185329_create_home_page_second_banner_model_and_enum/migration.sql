-- CreateEnum
CREATE TYPE "DonationType" AS ENUM ('Text', 'Image');

-- CreateEnum
CREATE TYPE "ImagePostType" AS ENUM ('SingleImage', 'DualImage');

-- CreateTable
CREATE TABLE "BannerSecond" (
    "id" TEXT NOT NULL,
    "ImagePostType" "ImagePostType" NOT NULL,
    "Doctor_Name" TEXT,
    "Doctor_Position" TEXT,
    "Working_place" TEXT,
    "Description_Title" TEXT,
    "Description" TEXT,
    "SingleImage" TEXT,
    "dynamicDescriptions" JSONB,
    "Choose_Dual_Type_Image_1" TEXT,
    "Choose_Dual_Type_Image_2" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BannerSecond_pkey" PRIMARY KEY ("id")
);
