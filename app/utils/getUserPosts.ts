import prisma from "@/prisma/prismaClient";
import React from "react";

const getUserPosts = async (id: number) => {
  const userPosts = await prisma.post.findMany({
    where: { authorId: id },
    include: {
      author: {
        select: {
          email: true,
          name: true,
        },
      },
    },
  });
  return userPosts;
};

export default getUserPosts;
