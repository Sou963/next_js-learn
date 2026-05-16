"use client";
import Style from "./page.module.css";
import State01 from "./state01";
import { useRouter } from "next/navigation";
export default function Home() {
  const fun = () => {
    alert("The function is working");
  };
  const router = useRouter();
  return (
    <div>
      <main>
        <State01 />
        <button type="button" onClick={() => router.push("/login")}>
          Click me
        </button>
      </main>
    </div>
  );
}
