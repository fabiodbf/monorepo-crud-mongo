import React from "react";
import List from "./list";

function Container() {
  return (
    <div>
      <h1>Some title component here</h1>
      <List list={["batata"]} />
      <button>Some future buttom component here</button>
    </div>
  );
}

export default Container;
