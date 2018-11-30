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
            <div id='equipoMedico' className='equipos'>
                <h1 style={{ color: '#009ce0', fontFamily: 'Montserrat', paddingTop: '30px', fontWeight: 'bold' }} className='text-center'>EQUIPO MÉDICO</h1>
                <div className='row'>
                    <div className='col-lg-4 text-center'>
                        <h4 style={{ color: '#009ce0', fontFamily: 'Montserrat', paddingTop: '30px', fontWeight: 'bold', paddingBottom: '10px' }} className='text-center'>Cama de hospital</h4>
                        <div style={{ height: '210px' }} className='imgWrap'>
                            <img className='imgGrid' src={camaDeHospital} alt='' />
                            <h4 style={{ color: '#009ce0', fontFamily: 'Montserrat', paddingTop: '5px' }} className='text-center imgDescription'>
                                Cuando un paciente esta inmovilizado una cama de hospital es
                                indispensable, para asearlo, darle de comer, cambiarlo de posición. Contamos con camas
                                de hospital manuales y eléctricas, dependiendo la necesidad del paciente
                            </h4>
                        </div>
                    </div>
                    <div className='col-lg-4 text-center'>
                        <h4 style={{ color: '#009ce0', fontFamily: 'Montserrat', paddingTop: '30px', fontWeight: 'bold', paddingBottom: '10px' }} className='text-center'>Colchón antillagas</h4>
                        <div style={{ height: '210px' }} className='imgWrap'>
                            <img className='imgGrid' src={colchonAntillagas} alt='' />
                            <h4 style={{ color: '#009ce0', fontFamily: 'Montserrat', paddingTop: '5px' }} className='text-center imgDescription'>
                                El colchón antillagas evita las dolorosas llagas en pacientes
                                inmovilizados, estas llagas son fáciles de evitar, pero muy lentas para sanar
                            </h4>
                        </div>
                    </div>
                    <div className='col-lg-4 text-center'>
                        <h4 style={{ color: '#009ce0', fontFamily: 'Montserrat', paddingTop: '30px', fontWeight: 'bold', paddingBottom: '10px' }} className='text-center'>Silla de ruedas</h4>
                        <div style={{ height: '210px' }} className='imgWrap'>
                            <img className='imgGrid' src={sillaDeRuedas} alt='' />
                            <h4 style={{ color: '#009ce0', fontFamily: 'Montserrat', paddingTop: '5px' }} className='text-center imgDescription'>
                                Una silla de ruedas que se adapta a las necesidades del paciente, le
                                estas pueden ser: ligera si se trasladan a
                                consultas, firme, compacta, con llantas grandes y brazos abatibles, para pacientes que
                                pueden mover sus brazos, sillas especiales PCI
                            </h4>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-lg-4 text-center'>
                        <h4 style={{ color: '#009ce0', fontFamily: 'Montserrat', paddingTop: '30px', fontWeight: 'bold', paddingBottom: '10px' }} className='text-center'>Grúa elevapacientes</h4>
                        <div style={{ height: '210px' }} className='imgWrap'>
                            <img className='imgGrid' src={gruaElevapaciente} alt='' />
                            <h4 style={{ color: '#009ce0', fontFamily: 'Montserrat', paddingTop: '5px' }} className='text-center imgDescription'>
                                Sin una grúa para movilizar a un paciente se requerirá de la ayuda de varias personas. El paciente muchas veces tiene
                                que esperar para un cambio de posición o para su aseo hasta que el resto de la familia
                                regrese de trabajar o un vecino pueda venir a ayudar
                            </h4>
                        </div>
                    </div>
                    <div className='col-lg-4 text-center'>
                        <h4 style={{ color: '#009ce0', fontFamily: 'Montserrat', paddingTop: '30px', fontWeight: 'bold', paddingBottom: '10px' }} className='text-center'>Aspirador de secreciones</h4>
                        <div style={{ height: '210px' }} className='imgWrap'>
                            <img className='imgGrid' src={aspiradorDeSecreciones} alt='' />
                            <h4 style={{ color: '#009ce0', fontFamily: 'Montserrat', paddingTop: '5px' }} className='text-center imgDescription'>
                                Cuando un paciente esta completamente inmovilizado y sus
                                vías respiratorias están comprometidas, el aspirador de secreciones permite eliminar las
                                mucosidades de una manera fácil y práctica
                            </h4>
                        </div>
                    </div>
                    <div className='col-lg-4 text-center'>
                        <h4 style={{ color: '#009ce0', fontFamily: 'Montserrat', paddingTop: '30px', fontWeight: 'bold', paddingBottom: '10px' }} className='text-center'>Andadores</h4>
                        <div style={{ height: '210px' }} className='imgWrap'>
                            <img className='imgGrid' src={andadora} alt='' />
                            <h4 style={{ color: '#009ce0', fontFamily: 'Montserrat', paddingTop: '5px' }} className='text-center imgDescription'>
                                Cuando un paciente va perdiendo fuerzas en sus extremidades, un andador
                                permite que se sostenga y mantenga el equilibro mientras camina, le brinda
                                independencia en su día a día. Pueden ser con banquito, llantitas o normales
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}