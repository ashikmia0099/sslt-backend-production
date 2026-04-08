/*
  Warnings:

  - You are about to drop the `MissionVissionObject` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "MissionVissionObject";

-- CreateTable
CREATE TABLE "ThreeBanner" (
    "id" TEXT NOT NULL,
    "Selected_type" "ThreeBannerType" NOT NULL,
    "BannerTitle" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Choose_Event_Image_One" TEXT NOT NULL,

    CONSTRAINT "ThreeBanner_pkey" PRIMARY KEY ("id")
);
