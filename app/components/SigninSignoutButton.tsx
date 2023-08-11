"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

type Props = {};

const SigninSignoutButton = (props: Props) => {
  const { data: session } = useSession();
  console.log(session);

  if (session && session.user) {
    return (
      <button onClick={() => signOut()} className="bg-red-600 btn">
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
