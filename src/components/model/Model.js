import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getModelById } from '../../selectors/getModelById';


export const Model = () => {
    const { modelId } = useParams();
    const navigate = useNavigate()

    const model = useMemo( () => getModelById(modelId), [ modelId ]);
    
    

    const handleReturn = () => {
        navigate( -1 );
    }


    if (!model) {
        return <Navigate to='/' />
    }
    
    const {
        id,
        modelName,
        specs1,
        specs2,
        specs3,
    } = model;

    const imagePath = `https://s3.us-east-2.amazonaws.com/biitacora.develop.com/${ id }.jpg`;

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-12 col-md-6 col-lg-4 my-auto">
                <img 
                    src={ imagePath } 
                    alt={ modelName }
                    className="img-thumbnail animate__animated animate__fadeInLeft my-auto"
                />
            </div>

            <div className="col-10 col-md-6 col-lg-8 animate__animated animate__fadeIn text-center">
                <h3>{ model.modelName }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item my-2"> { specs1 } </li>
                    <li className="list-group-item my-2"> { specs2 } </li>
                    <li className="list-group-item my-2"> { specs3 } </li>
                </ul>

                <button
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Regresar 
                </button>

            </div>

        </div>
    )
}
