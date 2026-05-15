import React from "react";

function layout({ children }) {
  return (
    <div>
      <h1>This is layout page in the top.</h1>
      {children}
    </div>
  );
}

export default layout;
