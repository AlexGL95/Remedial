
export const HomeScreen = () => {

    const img1path = `https://s3.us-east-2.amazonaws.com/biitacora.develop.com/ind01.jpg`;
    const img2path = `https://s3.us-east-2.amazonaws.com/biitacora.develop.com/ind02.jpg`;
    const img3path = `https://s3.us-east-2.amazonaws.com/biitacora.develop.com/ind03.jpg`;
    const img4path = `https://s3.us-east-2.amazonaws.com/biitacora.develop.com/ind04.jpg`;
    return (
        <div className='row justify-content-center'>
            <div className='col-12 col-sm-10 mt-sm-2 col-md-11 col-lg-10'>
                <div id="carouselExampleIndicators" className="carousel slide bg-dark" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={img1path} alt="Motocicleta1"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={img2path} alt="Motocicleta2"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={img3path} alt="Motocicleta3"></img>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only"></span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only"></span>
                    </a>
                </div>
            </div>
            <div className='col-12 col-sm-10 mt-sm-2 col-md-6 col-lg-4 mt-md-4'>
                <img className="d-block w-100" src={img4path} alt="motocicleta4"></img>
            </div>
            <div className='col-12 col-sm-10 mt-sm-2 col-md-5 col-lg-6 my-md-auto text-center'>
                <span className='fw-bolder color my-auto'>CRUISER</span><br></br>
                <span className='my-auto'>
                    Indian Motorcycle redefine el ic??nico crusier estadounidense. Son la combinaci??n perfecta de lo cl??sico y lo nuevo: un dise??o tradicional cargado con la m??xima tecnolog??a, desempe??o y calidad.
                    </span>
            </div>
        </div>
    )
}
