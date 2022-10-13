import Inventory from "../Item/index";
import ItemCard from "./ItemCard";

const Shop = () => {
  const itemList = Inventory;

  return (
    <div>
      <h1>Items</h1>
      <div className="inventory-container">
        {itemList.map((item) => (
          <ItemCard
            name={item.name}
            image={item.image}
            id={item.id}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
