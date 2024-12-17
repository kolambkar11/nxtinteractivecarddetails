"use client";
import Link from "next/link";
import React, { useState } from "react";

const Template = () => {
  const [input, setInput] = useState("");
  return (
    <>
      <div>Template</div>
      <input onChange={(e) => setInput(e.target.value)} value={input} />
      <Link href={"/"}>Home</Link>
      <Link href={"/profile"}>signup</Link>
      <Link href={"/signin"}>signin</Link>
    </>
  );
};

export default Template;
