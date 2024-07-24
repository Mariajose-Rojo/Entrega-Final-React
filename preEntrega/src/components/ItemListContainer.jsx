import { useEffect, useState } from "react";
import arrayProduct from "../assets/json/products.json";
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";
import Banner from "./Banner";


const ItemListContainer = () => {
    //seteo el estado con un array vacio inicial
  const [items, setItems] = useState([]);
  //uso el id para filtrar mis productos con useParams
  const {id} = useParams(); 

  useEffect(() => {
    const promesa = new Promise(resolve => {
      setTimeout(() => {
        //ternario para filtrado por categoria de producto
        resolve(id? arrayProduct.filter(item => item.categoria===id) : arrayProduct);
      }, 2000);
    });

    promesa.then(data => {
      setItems(data);
    });
  }, [id]);

  return (
    <>
      <Banner/>
      <div className="container">
        <div className="row">
          <ItemList items={items} />
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;