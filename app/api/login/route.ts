/* import { signJwtAccessToken } from "@/lib/jwt"; */
import { fetchJWT } from "@/app/utils/unused/jwt";
import prisma from "@/prisma/prismaClient";
import * as bcrypt from "bcrypt";

interface SigninRequestBody {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  /* const body: SigninRequestBody = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  if (user && (await bcrypt.compare(body.password, user.hashedPassword))) {
    const { hashedPassword, ...userWithoutPassword } = user;
    const accessToken = fetchJWT(userWithoutPassword);
    const userWithJWT = {
      ...userWithoutPassword,
      accessToken,
    };

    return new Response(JSON.stringify(userWithJWT));
  } else return new Response(null); */
  return new Response("this api is not in use");
}
