import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import ItemList from './ItemList';
import Banner from './Banner';
import Carrousel from './Carrousel';
import Loading from './Loading';

const ItemListContainer = () => {
  //genero un estado para el loading
  const [loading, setLoading] = useState(true); //si esta cargando es true
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
        //una vez cargo todos los elementos cambio el estado del loading
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchProducts();
  }, [id]);

  return (
    <>
      <Carrousel />
      <Banner />
      <div className="container">
        <div className="row">
          {loading ? <Loading/> : <ItemList items={items}/>}
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;



