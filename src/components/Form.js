import { useState } from "react";

export default function Form( {handleAddItems} ) {
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
      if (!Number(quantity)) return;
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