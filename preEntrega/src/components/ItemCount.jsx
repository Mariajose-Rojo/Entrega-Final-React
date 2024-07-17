import { useState } from "react"

const ItemCount = ({stock}) =>{
    //defino el estado del contador q le paso al boton central
    const [contador, setContador] = useState(1);
    const [stockDispo, setStock] = useState(stock); //para no excederme del stock

    //desarrollo las funciones 
    const incrementar = () =>{
        if (contador < stockDispo){
            setContador(contador + 1);
        }
        else{
            console.log("Nos quedamos sin stock!")
        }
    }

    const decrementar = () =>{
        if (contador > 1){
            setContador (contador - 1)
        }
    }

    const onAdd = () =>{ //funcion para agregar al carrito
        if (contador <= stockDispo){
            setStock (stockDispo - contador); 
            setContador(1); //para q una vez agregue productos vuelva a iniciar en uno
            console.log ("Agregaste " + contador + " productos al carrito.")
        }
    }


    return(
        <>
            <div className="row">
                <div className="col text-center">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-success rounded-start-5" onClick={decrementar}>-</button>
                        <button type="button" className="btn btn-success">{contador}</button>
                        <button type="button" className="btn btn-success rounded-end-5" onClick={incrementar}>+</button>
                        {/* <button onclik={funcion}> texto </button> */}
                    </div>
                    <div className="col text-center my-2">
                        <button type="button" className="btn btn-success rounded-5" onClick={onAdd}>Agregar al Carrito</button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ItemCount;


