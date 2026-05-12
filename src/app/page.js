"use client";
import Style from "./page.module.css";
import State01 from "./state01";
export default function Home() {
  const fun = () => {
    alert("The function is working");
  };
  return (
    <div>
      <main>
        <State01 />
      </main>
    </div>
  );
}
