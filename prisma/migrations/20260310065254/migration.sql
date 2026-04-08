-- CreateEnum
CREATE TYPE "DonationTextOrAmount" AS ENUM ('Text', 'Amount');

-- DropEnum
DROP TYPE "DonationType";

-- CreateTable
CREATE TABLE "DonationTextAndAmount" (
    "id" TEXT NOT NULL,
    "selectedType" "DonationTextOrAmount" NOT NULL,
    "Title" TEXT,
    "Description" TEXT,
    "NumberOfAmount" INTEGER NOT NULL,

    CONSTRAINT "DonationTextAndAmount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DonationMedium" (
    "id" TEXT NOT NULL,
    "MFS_Bank_Name" TEXT NOT NULL,
    "MFS_Bank_Image" TEXT NOT NULL,
    "shortOverview" TEXT NOT NULL,
    "FieldOne" TEXT,
    "FieldTwo" TEXT,

    CONSTRAINT "DonationMedium_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DonationFAQ" (
    "id" TEXT NOT NULL,
    "Title_Name" TEXT NOT NULL,
    "Description" TEXT NOT NULL,

    CONSTRAINT "DonationFAQ_pkey" PRIMARY KEY ("id")
);
