"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
type Props = {};

const CurrentUser = (props: Props) => {
  const { data: session, status } = useSession();
  if (status === "authenticated")
    return (
      <p className="space-x-5">
        <span className=" bg-sky-600 px-5 py-3 rounded-md">
          {/*  <Link
            href={"/post/user/" + session.user.id}
            className="bg-sky-600 btn py-3"
          > */}
          {"CurrentUser: " + session.user.name}
          {/*  </Link> */}
        </span>
        {/* <span className="bg-sky-600 btn">
          <Link href="/">{"Home"}</Link>
        </span> */}
        {/*  <span className="bg-sky-600 btn">
          <Link href="/contentpage"> {"ContentPage"}</Link>
        </span> */}
      </p>
    );
};

export default CurrentUser;
