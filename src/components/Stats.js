export default function Stats( {items, onDeleteEverything} ) {
    const numItems = items.length;
    const numPackedItems = items.filter((item) => item.packed).length;
    const numPackedItemsPercentage = Math.round((numPackedItems/numItems) * 100)
    return (
      <footer className="stats">
        {!(numPackedItemsPercentage === 100) ? 
        <em>You have {numItems} items in the list. You already packed {numPackedItems} ({!isNaN(numPackedItemsPercentage) ? numPackedItemsPercentage : 0}%).</em> 
        : 
        <em>You got everything!</em>}
        <button style={{marginLeft: 100}} onClick={onDeleteEverything}>
          Clear Everything
        </button>
      </footer>
    );
  };