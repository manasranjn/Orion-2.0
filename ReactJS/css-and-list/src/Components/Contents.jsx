import React from "react";
import style from "./contents.module.css";

const Contents = () => {
  return (
    <div id={style.content}>
      <h1 id={style.heading}>Contents</h1>
      <p className={style.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default Contents;
