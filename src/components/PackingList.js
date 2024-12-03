import Item from "./Item.js";

export default function PackingList( {items, onDeleteItem, onUpdateItem} ) {
    return (
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item 
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onUpdateItem={onUpdateItem}
            />
          ))}
        </ul>
      </div>
    );
  };