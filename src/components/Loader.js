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
    </>
  );
}
