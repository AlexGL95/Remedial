import { ModelList } from '../model/ModelList'


export const ModelScreen = () => {
    return (
        <div className='text-center'>
            <h1 className='color'>Modelos Disponibles</h1>
            <hr />

            <ModelList model="indian" />

        </div>
    )
}
