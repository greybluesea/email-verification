import { verifyJWT } from "@/app/utils/jwt";
import prisma from "@/prisma/prismaClient";
import { getServerSession } from "next-auth";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  /* if (!accessToken || !verifyJWT(accessToken)) {
    return new Response(
      JSON.stringify({
        error: "unauthorized",
      }),
      {
        status: 401,
      }
    );
  } */

  /* const session = await getServerSession();
  if (session) {
    console.log(session);
    console.log(session?.user.id);
  }
  return new Response(JSON.stringify(session)); */

  /* const session = await getServerSession();
  if (!session || session.user.id != params.id)
    return new Response(
      JSON.stringify({
        error: "unauthorized",
      }),
      {
        status: 401,
      }
    ); */

  const userPosts = await prisma.post.findMany({
    where: { authorId: +params.id },
    include: {
      author: {
        select: {
          email: true,
          name: true,
        },
      },
    },
  });

  return new Response(JSON.stringify(userPosts));
}
