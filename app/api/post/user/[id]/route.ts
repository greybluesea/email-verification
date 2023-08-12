import { authOptions } from "@/app/utils/authOptions";
import { verifyJWT } from "@/app/utils/jwt";
import prisma from "@/prisma/prismaClient";
import { getServerSession } from "next-auth";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  /* const accessToken = await request.headers.get("authorization");
return new Response(JSON.stringify(accessToken));
  console.log(accessToken);
  if (!accessToken || !verifyJWT(accessToken)) {
    return new Response(
      JSON.stringify({
        error: "unauthorized",
      }),
      {
        status: 401,
      }
    );
  } */
  //////
  /*  const session = await getServerSession(authOptions);
  console.log(session);
  return new Response(JSON.stringify(session)); */
  /* if (!session || !session.user.accessToken) {
    console.log(session);
    return new Response(
      JSON.stringify({
        error: "unauthorized",
      }),
      {
        status: 401,
      }
    );
  } */
  ///////
  /* const userPosts = await prisma.post.findMany({
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

  return new Response(JSON.stringify(userPosts)); */
  return new Response("this API is not in use");
}
