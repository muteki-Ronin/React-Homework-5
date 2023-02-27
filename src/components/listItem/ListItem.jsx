// STYLES
import "./style.css";

export const ListItem = ({ item, index, clickItem }) => {
  const handleClick = () => {
    clickItem(index);
  };

  return (
    <li className="list-item" onClick={handleClick}>
      {item.name}
    </li>
  );
};

