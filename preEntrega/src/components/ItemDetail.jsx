import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-2 pt-3">
                    <img src={item.img} alt={item.Nombre} className="img-fluid" />
                </div>
                <div className="col-md-4 pt-3" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px'  }}>
                    <h2 className="text-center pt-1"><b>{item.Nombre}</b></h2>
                    <p className="card-text pt-2 fs-4"><b>${item.precio}</b></p>
                    <p className="card-text pb-2 fs-5">{item.descripcion}</p>
                    <ItemCount stock={item.stock}/>;

                    <div className="alert alert-light" role="alert">
                        🚚¡Envío gratis a partir de $ 50.000!
                    </div>
                    <div className="alert alert-light" role="alert">
                        📦Retiro Gratis en sucursal!
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;