const Carrousel = () => {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide mb-4" data-bs-ride="carousel" data-bs-interval="2000">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                
                <div className="carousel-inner">
                    <div className="carousel-item d-item active">
                      <img src="https://perfugroupar.vtexassets.com/assets/vtex.file-manager-graphql/images/7856c1be-2ee1-4d32-b42e-d2840fd6d820___5f3db4ccf7d612fdbf4c0487d803ca99.jpg" className="d-block w-100 d-img" alt="slide1" />
                    </div>

                    <div className="carousel-item">
                        <img src="https://perfugroupar.vtexassets.com/assets/vtex.file-manager-graphql/images/4c684e24-ea19-4389-bae0-74398d1af2d1___4908686eb92a1819cd8a250b2d0f0ec9.jpg" className="d-block w-100 d-img" alt="slide3" />
                    </div>

                    <div className="carousel-item">
                        <img src="https://perfugroupar.vtexassets.com/assets/vtex.file-manager-graphql/images/c5f1e9e1-d598-47ab-93cf-09a57a8730e0___b7e44bdb7b4512e1d00cb9c7e52961ad.jpg" className="d-block w-100 d-img" alt="slide3" />
                    </div>
                </div>
                
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Carrousel;