import { authOptions } from "@/app/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const session = await getServerSession(authOptions);
  /* console.log(session); */

  redirect("/post/user/" + session?.user.id);
  return <div></div>;
};

export default page;
