import React, { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; //passing functions via props
}

//the list of cities was moved to app.tsx
//instead of props:Props we destructed it to items, heading
//so no need to put props.items anywhere
export default function ListGroup({ items, heading, onSelectItem }: Props) {
  //state hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {/* ternary operator ? can be used but its cleaner to right like this  */}
      {/*true : returns right side | false : returns false value */}
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
