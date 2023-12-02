import sprite from "./../../assets/sprite.svg";
import ModalPortal from "./ModalPortal";
import css from "./ModalWindow.module.css";
import React, { useEffect } from "react";

const ModalWindow = ({ children, onClick }) => {
  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClick();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleClose = () => {
    onClick();
  };

  const handleCloseBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  return (
    <ModalPortal>
      <div className={css.backdrop} onClick={handleCloseBackdrop}>
        <div className={css.container}>
          <svg className={css.closeIcon} onClick={handleClose}>
            <use href={`${sprite}#icon-close-icon`} />
          </svg>
          <div className={css.childrenWrap}>{children}</div>
        </div>
      </div>
    </ModalPortal>
  );
};

export default ModalWindow;
