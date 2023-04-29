import React, { ReactNode } from "react";

//child props using reactnode
interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}{" "}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dissmissble
      ></button>
    </div>
  );
};

export default Alert;
