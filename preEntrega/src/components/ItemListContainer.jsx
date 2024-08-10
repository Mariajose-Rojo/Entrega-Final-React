import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import ItemList from './ItemList';
import Banner from './Banner';
import Carrousel from './Carrousel';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const db = getFirestore();
      const productCollection = collection(db, 'productos');
      
      let q;
      if (id) {
        // Filtro por categoría si hay un id en la URL
        q = query(productCollection, where('categoria', '==', id));
      } else {
        // Obtiene todos los productos si no hay id
        q = query(productCollection);
      }

      try {
        const querySnapshot = await getDocs(q);
        const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setItems(products);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchProducts();
  }, [id]);

    //IMPORTAR PRODUCTS A MI BD: lo activo solo la primera vez asi no se carga constantemente
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



