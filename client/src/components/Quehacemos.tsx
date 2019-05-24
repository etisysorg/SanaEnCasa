import * as React from 'react'
const camilla = require('./../assets/img/camilla.png')
const pañal = require('./../assets/img/pañal1.png')


type State = {
}

type Props = {
}

export default class Quehacemos extends React.Component<Props, State> {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{ border: '4px dashed white' }} id='queHacemos'>
                <div className='queHacemos text-center'>
                    <h1 className='text-center' style={{ fontFamily: 'Montserrat', color: '#009ce0', fontWeight: 'bold', paddingBottom: '15px', paddingTop: '30px' }}>QUE HACEMOS</h1>
                    <div className='row'>
                        <div className='col-md-4 text-center'>
                            <img style={{ paddingBottom: '10px', width: '80px' }} src={camilla} alt='' />
                            <h3 style={{ color: '#009ce0', fontFamily: 'Montserrat', fontWeight: 'bold' }} className='text-center'>Prestamos de equipo médico</h3>
                            <h5 className='text-center' style={{ color: '#009ce0', lineHeight: '1.4' }}>
                                Sana en casa proporciona equipos médicos a las familias que tienen un enfermo en casa y que por su situación económica no pueden adquirir el equipo
                            </h5>
                        </div>
                        <div className='col-md-4 text-center'>
                            <img style={{ paddingBottom: '10px', width: '80px' }} src={pañal} alt='' />
                            <h3 style={{ color: '#009ce0', fontFamily: 'Montserrat', fontWeight: 'bold' }} className='text-center'>Pañales para adulto</h3>
                            <h5 className='text-center' style={{ color: '#009ce0', lineHeight: '1.4' }}>
                                Sana en Casa cuenta con un banco de pañales para apoyar a los más necesitados, que  tienen a un enfermo en casa
                            </h5>
                        </div>
                        <div className='col-md-4 text-center'>
                            <i style={{ color: '#009ce0', fontSize: '50px', paddingBottom: '10px' }} className='fas fa-ambulance'></i>
                            <h3 style={{ color: '#009ce0', fontFamily: 'Montserrat', fontWeight: 'bold' }} className='text-center'>Brigadas de ayuda</h3>
                            <h5 className='text-center' style={{ color: '#009ce0', lineHeight: '1.4' }}>
                                Nuestro equipo de voluntarios visitan a la familia para hacer reparaciones, pintar, limpiar, llevar medicamentos, llevar material de curación, todo para que su casa sea un lugar acondicionado para albergar a un enfermo
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}