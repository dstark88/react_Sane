import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 180, paddingTop: 30, paddingBottom: 1, textAlign: "center" }}
      className=""
    >
      {children}
    </div>
  );
}

export default Jumbotron;
