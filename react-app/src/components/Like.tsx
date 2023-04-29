import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}
const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  //toggle to set like status to fill
  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <AiFillHeart color="red" size={40} onClick={toggle} />;
  return <AiOutlineHeart size={40} onClick={toggle} />;
};

export default Like;
