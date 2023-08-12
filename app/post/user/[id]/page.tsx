import PostCard from "@/app/components/PostCard";
import UserProfile from "@/app/components/UserProfile";
import { authOptions } from "@/app/utils/authOptions";
import getUserPosts from "@/app/utils/getUserPosts";
import { getServerSession } from "next-auth";
import { title } from "process";
import React from "react";

const page = async ({ params }: { params: { id: number } }) => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const { accessToken, ...simpliedUser } = user!;

  /*  const res = await fetch(`http://localhost:3000/api/post/user/${params.id}`
   //, { cache: "no-cache",} 
   ); 
   
   const userPosts = await res.json();
   */

  if (session?.user.id != params.id) return <div>{"unauthorized!"}</div>;

  const userPosts = await getUserPosts(+params.id);

  return (
    <div className="max-w-5xl w-full flex justify-start ">
      <div className="flex flex-col items-start">
        <br />
        {/* <h2>User Profile:</h2> */}
        <div>Email: {JSON.stringify(simpliedUser.email)}</div>
        <br />
        <h3>Posts:</h3>
        {/* <div className="flex flex-wrap">{JSON.stringify(userPosts)}</div> */}
        {userPosts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.content || ""}
            published={post.published}
            author={post.author.name}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
