import { prisma } from "@/prisma/prismaClient";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: { token: string };
  }
) {
  const { token } = params;

  const user = await prisma.user.findFirst({
    where: {
      verifyTokens: {
        some: {
          AND: [
            {
              activatedAt: null,
            },
            {
              createdAt: {
                gt: new Date(Date.now() - 24 * 60 * 60 * 1000), // 24 hours ago
              },
            },
            {
              token,
            },
          ],
        },
      },
    },
  });

  if (!user) {
    throw new Error("Token is invalid or expired");
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      emailVerified: true,
    },
  });

  const updatedToken = await prisma.verifyToken.update({
    where: {
      token,
    },
    data: {
      activatedAt: new Date(),
    },
  });

  if (updatedUser && updatedToken) redirect("/verification/success");
}
