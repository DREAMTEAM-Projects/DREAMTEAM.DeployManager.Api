-- CreateTable
CREATE TABLE IF NOT EXISTS `Deploy` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `message` TEXT NOT NULL,
    `team` VARCHAR(191) NOT NULL,
    `project` VARCHAR(191) NOT NULL,
    `finished_at` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` INTEGER NULL,
    `author_id` VARCHAR(191) NOT NULL,
    `tags` VARCHAR(191) NULL,
    `active` BOOLEAN NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE IF NOT EXISTS `Author` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `external_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Author_email_key`(`email`),
    UNIQUE INDEX `Author_external_id_key`(`external_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Deploy` ADD CONSTRAINT `Deploy_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `Author`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
