import React from "react";
import InputItem from "./components/InputItem";
import prisma from "@/prisma/prismaClient";
import * as bcrypt from "bcrypt";
import { redirect } from "next/navigation";
//import { signIn } from "next-auth/react";

type Props = {};

const page = (props: Props) => {
  async function createUser(data: FormData) {
    "use server";
    const user = await prisma.user.create({
      data: {
        name: data.get("name") as string,
        email: data.get("email") as string,
        hashedPassword: await bcrypt.hash(data.get("password") as string, 10),
      },
    });

    if (!user) {
      return { error: "Something went wrong" };
    } else {
      const { hashedPassword, ...userWithoutPassword } = user;
      console.log(userWithoutPassword);

      /*  const token = await prisma.activateToken.create({
      data: {
        userId: user.id,
        token: `${randomUUID()}${randomUUID()}`.replace(/-/g, ''),
      },
    }) */
      /*  signIn(
        "credentials",
        {
          email: data.get("email") as string,
          password: data.get("password") as string,
        },
        { callbackUrl: "/" }
      ); */
      redirect("api/auth/signin");
    }
  }

  return (
    <form action={createUser} className="max-w-sm py-4 px-8 space-y-3">
      <InputItem name={"name"} type="text" />
      <InputItem name={"email"} />
      <InputItem name={"password"} />
      <div className="pt-3">
        <button type="submit" className="bg-orange-600 btn flex w-full">
          Register as a new user
        </button>
      </div>
    </form>
  );
};

export default page;
