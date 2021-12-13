import { useMemo } from 'react';

import { Card } from './Card';
import { getByModel } from '../../selectors/getByModel';

export const ModelList = ({ model }) => {

    const models = useMemo( () => getByModel( model ), [ model ] );

    return (
        <div className="row m-3 justify-content-center animate__animated animate__fadeIn">
                {
                    models.map( model => (
                        <Card 
                            key={ model.id } 
                            { ...model }
                        />
                    ))
                }
        </div>
    )
}
