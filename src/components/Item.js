export default function Item( {item, onDeleteItem, onUpdateItem} ) {
    return (
      <li key={item.id}>
        <span style={item.packed ? {textDecoration: "line-through"} : {}}>
        {item.description} | {item.quantity}
        </span>
      <input 
      id="checkbox" 
      name="checkbox" 
      type="checkbox" 
      onClick={() => onUpdateItem(item.id)}></input>
      <button 
      id="button" 
      name="button" 
      type="button" 
      onClick={() => onDeleteItem(item.id)}>❌</button>
      </li>
    );
};