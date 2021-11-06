import * as React from 'react'

const logo = require('../assets/img/logo.png')

export const Gracias = () => {
    return (
        <div>
            <h1 style={{ paddingTop: '20px' }} className='text-center'>Muchas gracias por tu donación!!</h1>
            <div className='text-center'>
                <img style={{ width: '300px', paddingTop: '20px' }} src={ logo } />
            </div>
        </div>
    )
}
