import * as React from 'react'
const camaDeHospital = require('./../assets/img/camaDeHospital.png')
const colchonAntillagas = require('./../assets/img/colchonAntillagas.jpg')
const gruaElevapaciente = require('./../assets/img/gruaElevapaciente.jpg')


type State = {
}

type Props = {
}


export default class Home extends React.Component<Props, State> {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='equipos'>
                <h1 style={{ color: '#009ce0', fontFamily: 'Montserrat', paddingTop: '30px', fontWeight: 'bold', paddingBottom: '20px' }} className='text-center'>EQUIPO MÉDICO</h1>

            </div>
        )
    }
}