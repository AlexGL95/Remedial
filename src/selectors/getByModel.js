import { models } from '../data/models';


export const getByModel = ( model ) => {

    const validPublishers = ['indian'];
    if( !validPublishers.includes( model ) ) {
        throw new Error( `${ model } is not a valid publisher` );
    }

    return models.filter( hero => hero.model === model );
}
