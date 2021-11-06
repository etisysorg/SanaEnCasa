import * as React from 'react'
import { AwesomeButton } from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'
import { redirectDonarPaypal, redirectDonarStripe100Variable, redirectDonarStripe150, redirectDonarStripe300, redirectDonarStripe500 } from './redirectDonar'
import Toggle from 'react-toggle'
import "react-toggle/style.css"

type State = {
    donacionMensual: boolean
}

type Props = {
}

export default class ComoAyudar extends React.Component<Props, State> {
    constructor(props) {
        super(props)

        this.state = {
            donacionMensual: false,
        }
    }

    onDonacionMensualToggled = () => {
        this.setState({
            donacionMensual: !this.state.donacionMensual,
        })
    }

    renderHeart = () => {
        if (this.state.donacionMensual) {
            return <i style={{ color: 'white' }} className='far fa-heart'></i>
        }

        return null
    }

    render() {
        return (
            <div style={{ border: '4px dashed white' }} id='comoAyudar' className='comoAyudar'>
                <h1 style={{ color: 'white', fontFamily: 'Montserrat', paddingTop: '30px', fontWeight: 'bold', paddingBottom: '5px' }} className='text-center'>COMO AYUDAR</h1>
                <div className='row text-center'>
                    <div className='col-md-10 mx-auto'>
                        <h3 style={{ color: 'white', fontFamily: 'Montserrat', paddingTop: '10px', fontWeight: 'bold', paddingBottom: '10px' }} className='text-center'><i style={{ color: 'white' }} className='far fa-credit-card'></i> Haz un donativo único o dona mensualmente</h3>
                        <div className='row text-center'>
                            <div className='col-md-5 mx-auto'>
                                <div className='form-group text-center'>
                                    <a onClick={ () => redirectDonarStripe150(this.state.donacionMensual) } ><button style={{ fontFamily: 'Montserrat', marginTop: '10px' }} className='btnBackNaranja'>150.00 MXN</button></a>
                                </div>
                                <div className='form-group text-center'>
                                    <a onClick={ () => redirectDonarStripe300(this.state.donacionMensual) } ><button style={{ fontFamily: 'Montserrat', marginTop: '10px' }} className='btnBackNaranja'>300.00 MXN</button></a>
                                </div>
                            </div>
                            <div className='col-md-5 mx-auto'>
                                <div className='form-group text-center'>
                                    <a onClick={ () => redirectDonarStripe500(this.state.donacionMensual) } ><button style={{ fontFamily: 'Montserrat', marginTop: '10px' }} className='btnBackNaranja'>500.00 MXN</button></a>
                                </div>
                                <div className='form-group text-center'>
                                    <a onClick={ () => redirectDonarStripe100Variable(this.state.donacionMensual) } ><button style={{ fontFamily: 'Montserrat', marginTop: '10px' }} className='btnBackNaranja'>Otra cantidad</button></a>
                                </div>
                            </div>
                        </div>
                        <div className='row text-center'>
                            <div className='col-md-6 mx-auto'>
                                <h5 style={{ color: 'white', fontFamily: 'Montserrat', fontWeight: 'bold', paddingBottom: '7px' }} className='text-center'>
                                    <Toggle
                                        checked={ this.state.donacionMensual }
                                        icons={{
                                            unchecked: null,
                                        }}
                                        className='importedtoggle'
                                        onChange={ this.onDonacionMensualToggled } />
                                    <span style={ { margin: 'auto' }}> Donación mensual { this.renderHeart() }</span>
                                </h5>
                                <h6 style={{ color: 'white', fontFamily: 'Montserrat', paddingTop: '0px', fontWeight: 'bold', paddingBottom: '8px' }} className='text-center'>También puedes hacer tu donativo usando <a style={ { color: 'blue', cursor: 'pointer'} } onClick={ redirectDonarPaypal }>Paypal</a></h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row text-center'>
                    <div className='col-md-12'>
                        <h3 style={{ color: 'white', fontFamily: 'Montserrat', paddingTop: '20px', fontWeight: 'bold', paddingBottom: '10px' }} className='text-center'><i style={{ color: 'white' }} className='far fa fa-users'></i> Hay muchas maneras de ayudar!</h3>
                        <div className='row text-center'>
                            <div className='col-md-4'>
                                <i style={{ fontSize: '50px', color: 'white', paddingTop: '10px', paddingBottom: '10px' }} className='fas fa-money-bill text-center'></i>
                                <h3 style={{ color: 'white', fontFamily: 'Montserrat', fontWeight: 'bold', paddingBottom: '10px' }} className='text-center'>Donativo de efectivo</h3>
                                <h4 style={{ color: 'white', fontSize: '20px', lineHeight: '1.5' }} className='text-center'>
                                    Dona el valor de una o varias camas, de una o varias grúas o de una cantidad en efectivo. Nuestra cuenta es: Cuenta Sana en casa, A.B.P. BANORTE 0264208497, CLABE 072580002642084972 (te entregaremos un CFDI deducible de impuestos)
                                </h4>
                            </div>
                            <div className='col-md-4'>
                                <i style={{ fontSize: '50px', color: 'white', paddingTop: '10px', paddingBottom: '10px' }} className='fas fa-hands-helping text-center'></i>
                                <h3 style={{ color: 'white', fontFamily: 'Montserrat', fontWeight: 'bold', paddingBottom: '10px' }} className='text-center'>Donativo de equipo</h3>
                                <h4 style={{ color: 'white', fontSize: '20px', lineHeight: '1.4' }} className='text-center'>
                                    Si tienes un equipo usado,  guardado, ¡hay muchas familias que pueden usarlo! Te mantendremos informado del destino final de tu donativo. Puedes acompañar al personal de Sana en casa
                                    a entregarlo a la familia que lo recibirá
                                </h4>
                            </div>
                            <div className='col-md-4'>
                                <i style={{ fontSize: '50px', color: 'white', paddingTop: '10px', paddingBottom: '10px' }} className='fas fa-building text-center'></i>
                                <h3 style={{ color: 'white', fontFamily: 'Montserrat', fontWeight: 'bold', paddingBottom: '10px' }} className='text-center'>Empresas</h3>
                                <h4 style={{ color: 'white', fontSize: '20px', lineHeight: '1.4' }} className='text-center'>
                                    Si tu empresa desea ser Socialmente responsable, Sana En Casa es ¡tu mejor opción! Te damos recibo deducible de impuestos y puedes estar seguro de que tu donativo será utilizado con total trasparencia. <a style={ { color:'blue' } } href='#contactanos'>Contáctanos!</a>
                                </h4>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}