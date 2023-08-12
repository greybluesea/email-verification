import React from "react";
import Link from "next/link";

type Props = {
  title: string;
  author: string;
  content: string;
  published: boolean;
};

const PostCard = ({ title, author, content = "", published }: Props) => {
  return (
    <div className="block w-[500px] py-6 px-9 rounded-md my-3 bg-slate-700 text-slate-300 ">
      <section
        id="title-and-published"
        className="flex justify-between items-center my-2 gap-8"
      >
        <h2 className="mr-auto font-semibold text-xl truncate">{title}</h2>{" "}
        <p className="space-x-5">
          <span className="btn-or-link whitespace-nowrap">
            {published ? "Published" : "Unpublished"}
          </span>
          <span className="font-bold text-slate-300 ">Author: {author}</span>
        </p>
      </section>
      <section id="author" className="overflow-hidden space-y-1">
        <p>{content}</p>
      </section>
    </div>
  );
};

export default PostCard;
