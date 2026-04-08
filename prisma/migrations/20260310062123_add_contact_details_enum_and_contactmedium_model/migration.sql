-- CreateEnum
CREATE TYPE "ContactDetails" AS ENUM ('Phone', 'Email', 'Address', 'OpeningDayTime');

-- CreateTable
CREATE TABLE "ContactMedium" (
    "id" TEXT NOT NULL,
    "postedType" "ContactDetails" NOT NULL,
    "FieldOne" TEXT,
    "FieldTwo" TEXT,

    CONSTRAINT "ContactMedium_pkey" PRIMARY KEY ("id")
);
