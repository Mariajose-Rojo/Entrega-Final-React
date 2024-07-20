import Item from "./Item";

const ItemList = ({ items }) => { // Recibe un array de objetos
  return (
    <>
      {items.map(producto => (
        <Item key={producto.id} item={producto} /> // Pasa un único producto
      ))}
    </>
  );
}

export default ItemList;