"use client";
import { useSession } from "next-auth/react";
import React from "react";
type Props = {};

const CurrentUser = (props: Props) => {
  const { data: session } = useSession();
  if (session && session.user)
    return (
      <p className="bg-sky-600 py-2 px-10 rounded-md">
        {"CurrentUser: " + session.user.name}
      </p>
    );
};

export default CurrentUser;
