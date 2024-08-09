import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import arrayProduct from '../assets/json/products.json';
import ItemList from './ItemList';
import Banner from './Banner';
import Carrousel from './Carrousel';
//importo mi base de datos 
import { getFirestore, collection, addDoc } from "firebase/firestore";


const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  //lo activo solo la primera vez asi no se carga constantemente
  // useEffect(() => {
  //   const bd = getFirestore(); // Accedo a la base de datos de Firestore
  //   const productCollection = collection(bd, 'productos'); // Especifica el nombre de la colección como string

  //   arrayProduct.forEach(async (producto) => {
  //     try {
  //       await addDoc(productCollection, producto);
  //       console.log("Producto añadido:", producto);
  //     } catch (error) {
  //       console.error("Error al añadir producto:", error);
  //     }
  //   });

  //   console.log("Proceso de importación finalizado!");
  // }, []);

  return (
    <>
      <Carrousel />
      <Banner />
      <div className="container">
        <div className="row">
          <ItemList items={items} />
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
