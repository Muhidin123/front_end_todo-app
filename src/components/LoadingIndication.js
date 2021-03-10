import React from "react";
import ReactLoading from "react-loading";
import "./index.css";

export default function LoadingIndication() {
  return (
    <div className='container'>
      <div className='child'>
        <ReactLoading type='bars' color='grey' height={400} width={280} />
      </div>
    </div>
  );
}
