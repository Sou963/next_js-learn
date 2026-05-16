import React from "react";

function layout({ children }) {
  return (
    <html>
      <body>
        <div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/class">About</a>
            </li>
            <li>
              <a href="/router">Contact</a>
            </li>
          </ul>
          {children}
        </div>
      </body>
    </html>
  );
}

export default layout;
