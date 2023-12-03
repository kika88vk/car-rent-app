import React from "react";
import { Rings } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <div className={css.container}>
        <Rings
          height="150"
          width="150"
          color="#3470FF"
          radius="6"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        />
      </div>
    </div>
  );
};

export default Loader;
