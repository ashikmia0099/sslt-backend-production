-- CreateEnum
CREATE TYPE "SocialMediaName" AS ENUM ('Facebook', 'Youtube', 'Twitter', 'Linkedin');

-- CreateTable
CREATE TABLE "Footer" (
    "id" TEXT NOT NULL,
    "socialLink" TEXT NOT NULL,

    CONSTRAINT "Footer_pkey" PRIMARY KEY ("id")
);
