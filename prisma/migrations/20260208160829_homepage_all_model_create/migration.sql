-- CreateEnum
CREATE TYPE "ThreeBannerType" AS ENUM ('BannerOne', 'BannerTWo', 'BannerThree');

-- CreateEnum
CREATE TYPE "FoundingMemberType" AS ENUM ('Pesident', 'Secretary', 'Founding');

-- CreateTable
CREATE TABLE "MissionVissionObject" (
    "id" TEXT NOT NULL,
    "Selected_type" "ThreeBannerType" NOT NULL,
    "BannerTitle" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Choose_Event_Image_One" TEXT NOT NULL,

    CONSTRAINT "MissionVissionObject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PopularMedicalDecis" (
    "id" TEXT NOT NULL,
    "Desis_Name" TEXT,
    "Choose_Image" TEXT,
    "Description_Title" TEXT,
    "Description" TEXT,
    "dynamicDescriptions" JSONB,

    CONSTRAINT "PopularMedicalDecis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommunicationAndHealthcare" (
    "id" TEXT NOT NULL,
    "Title_Name" TEXT NOT NULL,
    "Overview" TEXT NOT NULL,
    "Choose_Image" TEXT NOT NULL,
    "DescriptionTitle" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "dynamicDescriptions" JSONB NOT NULL,

    CONSTRAINT "CommunicationAndHealthcare_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HearingAndHealthcare" (
    "id" TEXT NOT NULL,
    "Title_Name" TEXT NOT NULL,
    "Description" TEXT NOT NULL,

    CONSTRAINT "HearingAndHealthcare_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoundingMemberMessage" (
    "id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Choose_Image" TEXT NOT NULL,

    CONSTRAINT "FoundingMemberMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OurCommunityEvent" (
    "id" TEXT NOT NULL,
    "Event_Title" TEXT NOT NULL,
    "Event_Place_Name" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Choose_Image" TEXT NOT NULL,

    CONSTRAINT "OurCommunityEvent_pkey" PRIMARY KEY ("id")
);
