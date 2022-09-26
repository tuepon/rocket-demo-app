import React, { useState } from "react";
import ReactDOM from "react-dom";

const wasm = import("../build/rocket_demo_app_bg");

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
