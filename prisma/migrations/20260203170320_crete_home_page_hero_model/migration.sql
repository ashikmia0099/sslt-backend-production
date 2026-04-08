-- CreateEnum
CREATE TYPE "BannerType" AS ENUM ('Text', 'Image');

-- CreateTable
CREATE TABLE "Gallary" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Gallary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hero" (
    "id" TEXT NOT NULL,
    "postType" "BannerType" NOT NULL,
    "title" TEXT,
    "shortOverview" TEXT,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Hero_pkey" PRIMARY KEY ("id")
);
