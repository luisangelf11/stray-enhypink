import React from "react";
import "../components/Loader.css";

export default function Loader() {
  return (
    <>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p style={{fontWeight: 500, textAlign: "center", color: "#fff"}}>By: Stray Kids, Enhypen And Black Pink</p>
    </>
  );
}
