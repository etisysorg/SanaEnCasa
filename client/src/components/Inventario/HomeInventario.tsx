import * as React from 'react'
import NavbarInventario from './NavbarInventario'
import CapturaEquipoMedico from './CapturaEquipoMedico'
import { Link } from 'react-router-dom'

const logo = require('./../../assets/img/logo.png')



type State = {
}

type Props = {
}

export default class LoginInventario extends React.Component<Props, State> {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <NavbarInventario />
                <h1 style={{ paddingTop: '20px' }} className='text-center'>Bienvenido al inventario de Sana En Casa</h1>
                <div className='text-center'>
                    <img style={{ width: '300px', paddingTop: '20px' }} src={ logo } />
                </div>
            </div>
        )
    }
}