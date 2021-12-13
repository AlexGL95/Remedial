import { models } from '../data/models';


export const getModelById = ( id = '' ) => {
    return models.find( model => model.id === id );
}
