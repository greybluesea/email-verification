import UserProfile from "@/app/components/UserProfile";
import { getServerSession } from "next-auth";
import React from "react";

const page = async ({ params }: { params: { id: number } }) => {
  const session = await getServerSession();

  const res = await fetch(
    `http://localhost:3000/api/post/user/${params.id}` /* , {
    cache: "no-cache",
  } */
  );

  const userPosts = await res.json();

  return (
    <div>
      <br />
      <br />
      {/* <UserProfile /> */}
      <h3>User Profile:</h3>
      <div>{JSON.stringify(session?.user)}</div>
      <br />
      <br />
      <br />
      <h3>User Posts:</h3>
      <div>{JSON.stringify(userPosts)}</div>
    </div>
  );
};

export default page;
