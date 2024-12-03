import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";

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

  const handleDeleteEverything = () => {
    setItems([]);
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
      <Stats items={items} onDeleteEverything={handleDeleteEverything}/>
    </div>
  );
};

export default App;
