import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <img src={item.img} alt={item.Nombre} className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <h1>{item.Nombre}</h1>
                    <p className="card-text pt-2 fs-4"><b>${item.precio}</b></p>
                    <p>{item.descripcion}</p>
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