import React from "react";
import styles from "./parenthesisbutton.module.css";

function Parenthesisbutton({ text, action, icon }) {
  return (
    <button className={styles.parenthesisbutton} onClick={action}>
      <i class={`fa ${icon}`} aria-hidden="true"></i>
      &nbsp;
      {text}
    </button>
  );
}

export default Parenthesisbutton;
