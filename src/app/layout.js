"use client";
import React from "react";
import { usePathname } from "next/navigation";
import "./nav.css";

function layout({ children }) {
  const pathname = usePathname();
  return (
    <html>
      <body>
        <div>
          <ul>
            <li>
              <a href="/" className={`${pathname === "/" ? "active" : ""}`}>
                Home
              </a>
            </li>
            <li>
              <a
                href="/class"
                className={`${pathname === "/class" ? "active" : ""}`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/router"
                className={`${pathname === "/router" ? "active" : ""}`}
              >
                Contact
              </a>
            </li>
          </ul>
          {children}
        </div>
      </body>
    </html>
  );
}

export default layout;
