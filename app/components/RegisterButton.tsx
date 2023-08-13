"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {};

const RegisterButton = (props: Props) => {
  const { data: session, status } = useSession();
  /* console.log(session); */
  const router = useRouter();
  const pathname = usePathname();

  if (status === "authenticated") {
    return null;
  }
  if (
    pathname === "/register" ||
    pathname === "/register/success" ||
    pathname === "/emailverify"
  )
    return (
      <button
        onClick={() => {
          router.push("/");
        }}
        className=" bg-cyan-600 px-8 btn"
      >
        Home
      </button>
    );

  return (
    <button
      onClick={() => {
        router.push("/register");
      }}
      className=" bg-orange-600 btn"
    >
      Register
    </button>
  );
};

export default RegisterButton;
