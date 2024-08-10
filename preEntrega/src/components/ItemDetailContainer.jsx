import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
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
        } else {
          console.log("No such document!");
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
        <ItemDetail item={item} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
