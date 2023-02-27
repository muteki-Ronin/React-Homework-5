// CORE
import { useState } from "react";
// COMPONENTS
import { ListItem } from "../listItem/ListItem";
import { Card } from "../card/Card";
// STYLES
import "./style.css";

export const ListItems = ({ items, type }) => {
  const [item, setItem] = useState(null);
  const [itemType, setItemType] = useState(null);

  const clickItem = (index) => {
    setItem(items[index]);
    setItemType(type);
  };

  return (
    <>
      <ul className="list-container">
        {items.map((item, index) => (
          <ListItem
            key={item.name}
            item={item}
            index={index}
            clickItem={clickItem}
          />
        ))}
      </ul>
      {item && <Card item={item} itemType={itemType} />}
    </>
  );
};
