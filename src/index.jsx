import React, { useState } from "react";
import ReactDOM from "react-dom";

const wasm = import("./target/release/rocket-demo-app");

wasm.then(m => {
  const App = () => {

    return ( 
      <>
        <div>
          <h1>Hi there</h1>
          <button onClick={m.big_computation}>My birthday is...</button>
        </div>
      </>
    );
  };

  ReactDOM.render(<App />, document.getElementById("root"));
});
