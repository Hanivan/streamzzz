-- CreateTable
CREATE TABLE "Comics" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,

    CONSTRAINT "Comics_pkey" PRIMARY KEY ("id")
);
