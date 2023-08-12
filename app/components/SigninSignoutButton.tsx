"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const SigninSignoutButton = (props: Props) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  /* console.log(session); */

  if (status === "authenticated") {
    return (
      <button
        onClick={() => {
          router.push("/");
          signOut();
        }}
        className="bg-red-600 btn"
      >
        Sign Out
      </button>
    );
  }
  return (
    <button onClick={() => signIn()} className=" bg-green-600 btn">
      Sign In
    </button>
  );
};

export default SigninSignoutButton;
