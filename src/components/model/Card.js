import { Link } from 'react-router-dom'


export const Card = ({
    id,
    modelName,
    desc,
    specs1,
}) => {

    const imagePath = `/assets/${id}.jpg`;

    return (
        <div className="col-12 col-sm-10 col-md-6 my-2 animate__animated animate__fadeIn">
            <div className="card shadow">
                
                <div className="row">
                    <div className="col-12 col-md-6 text-center my-auto">
                        <img src={ imagePath } className="img-fluid my-auto" alt={modelName} />
                    </div>
                    <div className="col-12 col-md-6">

                        <div className="card-body">

                            <h5 className="card-title fw-bolder">{modelName}</h5>
                            <p className="card-text fw-bold">{desc}</p>
                            <p className="card-text">
                                <small className="text-muted">{ specs1 }</small>
                            </p>
                            <Link className='btn btn-primary' to={`/model/${id}`}>
                                Ver más
                            </Link>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
