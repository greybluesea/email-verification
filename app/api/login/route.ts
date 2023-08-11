/* import { signJwtAccessToken } from "@/lib/jwt"; */
import prisma from "@/prisma/prismaClient";
import * as bcrypt from "bcrypt";

interface RequestBody {
  email: string;
  password: string;
}
export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  if (user && (await bcrypt.compare(body.password, user.hashedPassword))) {
    const { hashedPassword, ...userWithoutPassword } = user;
    return new Response(JSON.stringify(userWithoutPassword));

    /*  const accessToken = signJwtAccessToken(userWithoutPassword);
    const result = {
      ...userWithoutPass,
      accessToken,
    };
    return new Response(JSON.stringify(result));  */
  } else return new Response(JSON.stringify(null));
}
