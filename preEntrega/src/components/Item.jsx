import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="col-md-3 p-3">
      <div className="card border-0 gap-2 shadow-sm h-500 d-flex flex-column" style={{ width: '18rem' }}>
        <img src={item.img} className="card-img-top" alt={item.Nombre} style={{ objectFit: 'contain', height: '300px' }} />
        <div className="card-body d-flex flex-column align-items-center">
          <h5 className="card-title text-center pt-1">{item.Nombre}</h5>
          <p className="card-text text-center pt-4 fs-4"><b>${item.precio}</b></p>
          <Link to={"/item/" + item.id}>
            <button type="button" className="btn btn-success rounded-5 mt-auto">Ver Producto</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
