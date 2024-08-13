const Loading = () =>{
    return (
        <>
        <div className="row my-5">
            <div className="col text-center">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden" style={{ width: '150px' }}>Cargando...</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Loading;
