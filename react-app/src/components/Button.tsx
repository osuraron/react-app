import React, { ReactNode } from "react";

//children typescript
interface Props {
  children: ReactNode;
  color?: "primary" | "danger" | "secondary";
  onClick: () => void;
}

//destructure
//dafault value props for color
const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
