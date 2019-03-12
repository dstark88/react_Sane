import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 170, paddingTop: 30, textAlign: "center" }}
      className=""
    >
      {children}
    </div>
  );
}

export default Jumbotron;
