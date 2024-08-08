import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import arrayProduct from '../assets/json/products.json';
import ItemList from './ItemList';
import Banner from './Banner';
import Carrousel from './Carrousel';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(id ? arrayProduct.filter((item) => item.categoria === id) : arrayProduct);
      }, 2000);
    });

    promesa.then((data) => {
      setItems(data);
    });
  }, [id]);

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
