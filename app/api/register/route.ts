import prisma from "@/prisma/prismaClient";
import * as bcrypt from "bcrypt";

interface RegisterRequestBody {
  name: string;
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RegisterRequestBody = await request.json();

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      hashedPassword: await bcrypt.hash(body.password, 10),
    },
  });

  const { hashedPassword, ...userWithoutPassword } = user;
  return new Response(JSON.stringify(userWithoutPassword));
}
