import { useState } from "react";

function Logo() {
  return <h1>My Travel List</h1>;
};

function Form( {handleAddItems} ) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleDescription = (e) => {
    // Set the description...
    setDescription(e.target.value);
  };

  const handleQuantity = (e) => {
    // Set the quantity...
    setQuantity(Number(e.target.value));
  };
  
  function handleSubmit(e) {
    // Prevent the page from reloading...
    e.preventDefault();
    // Empty description is not allowed...
    if (!description) return;
    // Create a new item...
    const newItem = {id: Date.now(), description: description, quantity: quantity, packed: false};
    // Add new item to the list...
    handleAddItems(newItem);
    setDescription("");
    setQuantity("");
  };
  
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>
      <input 
      type="text"
      placeholder={1}
      value={quantity}
      onChange={handleQuantity}
      />
      <input 
      type="text" 
      placeholder="Item..." 
      value={description} 
      onChange={handleDescription}  
      />
      <button type="submit">Add</button>
    </form>
  );
};

function Item( {item, onDeleteItem, onUpdateItem} ) {
  return (
    <li key={item.id}
    className={item.packed ? "strike-through" : ""}
    >
    {item.description} | {item.quantity}
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

function PackingList( {items, onDeleteItem, onUpdateItem} ) {
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

function Stats( {items} ) {
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  return (
    <footer className="stats">
      <em>You have {numItems} items in the list. You already packed {numPackedItems} (Z%).</em>
    </footer>
  );
};

function App() {
  // Responsible for supplying the data to the PackingList Component...
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    // Create a new array that has the selected item...
    setItems((prevItem) => 
    [...prevItem, item]
    );
  };

  const handleDeleteItem = (id) => {
    // Delete item from the list...
    setItems((prevItem) => prevItem.filter((item) => item.id !== id));
  };
  
  const handleUpdateItem = (id) => {
    setItems((prevItem) => prevItem.map(
    (item) => item.id === id ? 
    {...item, packed: !item.packed} : item)
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem} onUpdateItem={handleUpdateItem}/>
      <Stats items={items} />
    </div>
  );
};

export default App;