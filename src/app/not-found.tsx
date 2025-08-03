"use client";
import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <main className="w-screen h-[90vh] flex justify-center items-center gap-4 relative">
      <div className="flex flex-col justify-center items-center z-50">

        <h1 className="text-3xl font-bold mt-6 text-primary flex items-center gap-4">
          404
        </h1>
        <span className="max-w-80 text-center my-2">
          This page does not exist! If you believe this is a mistake, please
          contact me. For now,{" "}
          <Link className="text-blue-700 underline" href="/">
            return home
          </Link>
          .
        </span>
      </div>
      <div className="opacity-50 absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0" />
    </main>
  );
};

export default ErrorPage;
