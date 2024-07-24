import { useEffect, useState } from "react";
import arrayProduct from "../assets/json/products.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const{id}= useParams(); //uso el id para filtrar mis productos con useParams

  useEffect(() => {
    const promesa = new Promise(resolve => {
      setTimeout(() => {
        resolve(arrayProduct.find(item => item.id === parseInt(id)));
      }, 2000);
    });

    promesa.then((data) => {
      setItem(data);
    });
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <ItemDetail item={item} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;