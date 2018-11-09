import * as React from 'react'
const camaDeHospital = require('./../assets/img/camaDeHospital.jpg')
const sillaDeRuedas = require('./../assets/img/sillaDeRuedas.jpg')
const colchonAntillagas = require('./../assets/img/colchonAntillagas2.jpg')
const gruaElevapaciente = require('./../assets/img/gruaElevapaciente.jpg')
const aspiradorDeSecreciones = require('./../assets/img/aspiradorDeSecreciones.jpg')
const andadora = require('./../assets/img/andadora.jpeg')


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
                <h1 style={{ color: '#009ce0', fontFamily: 'Montserrat', paddingTop: '30px', fontWeight: 'bold' }} className='text-center'>EQUIPO MÉDICO</h1>
                <div style={{ paddingLeft: '40px', paddingRight: '40px' }} className='row'>
                    <div className='col-md-4 text-center'>
                        <h4 style={{ color: '#009ce0', fontFamily: 'Montserrat', paddingTop: '30px', fontWeight: 'bold', paddingBottom: '10px' }} className='text-center'>Cama de hosital</h4>
                        <img className='imgGrid' src={camaDeHospital} alt=''/>
                    </div>
                    <div className='col-md-4 text-center'>
                        <h4 style={{ color: '#009ce0', fontFamily: 'Montserrat', paddingTop: '30px', fontWeight: 'bold', paddingBottom: '10px' }} className='text-center'>Colchón antillagas</h4>
                        <img className='imgGrid' src={colchonAntillagas} alt=''/>
                    </div>
                    <div className='col-md-4 text-center'>
                        <h4 style={{ color: '#009ce0', fontFamily: 'Montserrat', paddingTop: '30px', fontWeight: 'bold', paddingBottom: '10px' }} className='text-center'>Silla de ruedas</h4>
                        <img className='imgGrid' src={sillaDeRuedas} alt=''/>
                    </div>
                </div>

                <div style={{ paddingLeft: '40px', paddingRight: '40px' }} className='row'>
                    <div className='col-md-4 text-center'>
                        <h4 style={{ color: '#009ce0', fontFamily: 'Montserrat', paddingTop: '30px', fontWeight: 'bold', paddingBottom: '10px' }} className='text-center'>Grúa elevapacientes</h4>
                        <img className='imgGrid' src={gruaElevapaciente} alt=''/>
                    </div>
                    <div className='col-md-4 text-center'>
                        <h4 style={{ color: '#009ce0', fontFamily: 'Montserrat', paddingTop: '30px', fontWeight: 'bold', paddingBottom: '10px' }} className='text-center'>Aspirador de secreciones</h4>
                        <img className='imgGrid' src={aspiradorDeSecreciones} alt=''/>
                    </div>
                    <div className='col-md-4 text-center'>
                        <h4 style={{ color: '#009ce0', fontFamily: 'Montserrat', paddingTop: '30px', fontWeight: 'bold', paddingBottom: '10px' }} className='text-center'>Andadores</h4>
                        <img className='imgGrid' src={andadora} alt=''/>
                    </div>
                </div>
            </div>
        )
    }
}