"use client";
import Image from "next/image";
import Backdrop from "./components/Backdrop";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session && session.user) router.push("/post/user/" + session.user.id);
  }, [session]);

  return (
    <>
      {/* <Backdrop /> */}
      <div></div>
    </>
  );
}
