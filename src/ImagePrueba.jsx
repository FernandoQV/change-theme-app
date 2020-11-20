import React from 'react'
import {Image} from './components/atoms/Atoms'
import ruta from '../public/images/icon-facebook.svg'
const ImagePrueba = () => {
    return (
        <div>
            <Image src={ruta} alt='imagen pruea'></Image>
        </div>
    )
}

export default ImagePrueba
