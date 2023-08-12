"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
type Props = {};

const CurrentUser = (props: Props) => {
  const { data: session } = useSession();
  if (session && session.user)
    return (
      <p className="space-x-5">
        <span className="text-sky-600">
          {"CurrentUser: " + session.user.name}
        </span>
        <span className="bg-sky-600 btn">
          <Link href="/"> {"HomePage"}</Link>
        </span>
        <span className="bg-sky-600 btn">
          <Link href="/contentpage"> {"ContentPage"}</Link>
        </span>
      </p>
    );
};

export default CurrentUser;
