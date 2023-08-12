import React from "react";
import { getServerSession } from "next-auth";

const page = async ({ params }: { params: { id: number } }) => {
  /*  const session = await getServerSession();
  console.log(session);
  if (!session || !session.user) return null; */
  const res = await fetch(
    `http://localhost:3000/api/post/user/${params.id}` /* , {
    cache: "no-cache",
  } */
  );

  const userPosts = await res.json();

  return <div>{JSON.stringify(userPosts)}</div>;
};

export default page;
