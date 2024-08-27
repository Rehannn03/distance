/*
  Warnings:

  - You are about to drop the column `latittude` on the `School` table. All the data in the column will be lost.
  - Added the required column `latitude` to the `School` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `School` DROP COLUMN `latittude`,
    ADD COLUMN `latitude` DOUBLE NOT NULL;
