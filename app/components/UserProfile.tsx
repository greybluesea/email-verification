"use client";
import { useSession } from "next-auth/react";
import React from "react";

type Props = {};

const UserProfile = (props: Props) => {
  const session = useSession();
  return (
    <div className="flex flex-wrap max-w-md overscroll-clip">
      {JSON.stringify(session)}
    </div>
  );
};

export default UserProfile;
