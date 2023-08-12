"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

type Props = {};

const RegisterButton = (props: Props) => {
  const { data: session, status } = useSession();
  /* console.log(session); */

  if (status === "authenticated") {
    return null;
  }
  return (
    <button onClick={() => {}} className=" bg-orange-600 btn">
      Register
    </button>
  );
};

export default RegisterButton;
