import { getServerSession } from "next-auth";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const session = await getServerSession();
  const router = useRouter();
  router.push("/post/user/" + session?.user.id);
  return <div></div>;
};

export default page;
