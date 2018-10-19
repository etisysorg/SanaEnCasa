import * as React from 'react'

type State = {
}

type Props = {
}

export default class ComoAyudar extends React.Component<Props, State> {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='comoAyudar'>
                <h1 style={{ color: 'white', fontFamily: 'Montserrat', paddingTop: '30px', fontWeight: 'bold', paddingBottom: '10px' }} className='text-center'>COMO AYUDAR</h1>
                <hr />
                <h2 style={{ color: 'white', fontFamily: 'Montserrat', fontWeight: 'bold', paddingBottom: '10px' }} className='text-center'>Donativo de equipo nuevo o usado</h2>
                <div className='row'>
                    <div className='col-md-6 text-center'>
                        <i style={{ fontSize: '130px', color: 'white', paddingTop: '10px', paddingBottom: '10px' }} className='fas fa-hands-helping text-center'></i>
                    </div>
                    <div className='col-md-5'>
                        <h4 style={{ color: 'white', fontSize: '20px', lineHeight: '1.4' }} className='text-center'>
                            Si tienes un equipo usado,  guardado, ¡hay muchas familias que pueden usarlo! Te mantendremos informado del destino final de tu donativo. Puedes acompañar al personal de Sana en casa
                            a entregarlo a la familia que lo recibirá.
                        </h4>
                    </div>
                </div>
                <hr />
                <h2 style={{ color: 'white', fontFamily: 'Montserrat', fontWeight: 'bold', paddingBottom: '10px' }} className='text-center'>Donativo de efectivo</h2>
                <div className='row'>
                    <div className='col-md-5 text-center'>
                        <h4 style={{ color: 'white', fontSize: '20px', lineHeight: '1.5' }} className='text-center'>
                            Dona el valor de una o varias camas, de una o varias grúas o de una cantidad en efectivo. Nuestra cuenta es: Cuenta Sana en casa, A.B.P. BANORTE 0264208497, CLABE 072580002642084972 (te entregaremos un CFDI deducible de impuestos)
                        </h4>
                    </div>
                    <div className='col-md-7 text-center'>
                        <i style={{ fontSize: '130px', color: 'white', paddingTop: '10px', paddingBottom: '10px' }} className='fas fa-money-bill text-center'></i>
                    </div>
                </div>
            </div>
        )
    }
}