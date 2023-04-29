import React, { useState } from "react";

//children is used to write to app.tsx and not in the component
interface Props {
  children: string;
  maxChars?: number;
}
const Expandable = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  //if the text length is less than the max length return all
  if (children.length <= maxChars) return <p> {children}</p>;

  //if text is greater than the max length then return
  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <p>
      {text}...
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default Expandable;
