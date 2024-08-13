import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";

const ItemDetailContainer = () => {
  //genero un estado para el loading
  const [loading, setLoading] = useState(true); //si esta cargando es true
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const db = getFirestore();
      const productDoc = doc(db, "productos", id);

      try {
        const docSnap = await getDoc(productDoc);
        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
          //una vez cargo toda la info
          setLoading(false);
        } else {
          console.log("No se encuentra!");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="container">
      <div className="row">
      {loading ? <Loading/> : <ItemDetail item={item} />};
      </div>
    </div>
  );
};

export default ItemDetailContainer;
