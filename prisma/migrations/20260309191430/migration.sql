/*
  Warnings:

  - You are about to drop the column `Selected_type` on the `MissionVissionObject` table. All the data in the column will be lost.
  - Added the required column `postType` to the `MissionVissionObject` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MissionVissionObject" DROP COLUMN "Selected_type",
ADD COLUMN     "postType" "BannerType" NOT NULL;
