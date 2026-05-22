"use client";
import React from "react";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  const comfirmorder = () => {
    alert("Your order is confirmed!🫡");
    router.push("/");
  };
  return (
    <div>
      <h1>This is the order page!</h1>
      <img src="https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/honda-select-model-matte-marvel-blue-metallic-1669211492397.png?q=80" />
      <button onClick={comfirmorder}>Buy now</button>
    </div>
  );
}

export default page;
