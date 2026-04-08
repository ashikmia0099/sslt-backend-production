/*
  Warnings:

  - Added the required column `ChooseFoundingMemberType` to the `FoundingMemberMessage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FoundingMemberMessage" ADD COLUMN     "ChooseFoundingMemberType" "FoundingMemberType" NOT NULL;
