import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 220, paddingTop: 30, textAlign: "center" }}
      className=""
    >
      {children}
    </div>
  );
}

export default Jumbotron;
