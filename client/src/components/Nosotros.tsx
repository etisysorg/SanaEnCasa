import * as React from 'react'

type State = {
}

type Props = {
}

export default class Nosotros extends React.Component<Props, State> {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='nostros text-center'>
                <h1 style={{ color: 'white', fontFamily: 'Montserrat', paddingTop: '30px', fontWeight: 'bold', paddingBottom: '20px' }} className='text-center'>NOSOTROS</h1>
                <div className='row'>
                    <div className='col-md-4 text-center'>
                        <span style={{ color: 'white', fontSize: '50px', paddingBottom: '10px' }} className='fas fa-fist-raised'></span>
                        <h2 style={{ color: 'white', fontFamily: 'Montserrat', fontWeight: 'bold' }} className='text-center'>Misión</h2>
                        <h5 className='text-center' style={{ color: 'white', lineHeight: '1.4' }}>
                            Ofrecer apoyo a las familias que tienen un enfermo en casa y que por su situación económica o social no cuentan con los medios necesarios para atenderlos
                        </h5>
                    </div>
                    <div className='col-md-4 text-center'>
                        <span style={{ color: 'white', fontSize: '50px', paddingBottom: '10px' }} className='fas fa-hand-holding-heart'></span>
                        <h2 style={{ color: 'white', fontFamily: 'Montserrat', fontWeight: 'bold' }} className='text-center'>Visión</h2>
                        <h5 className='text-center' style={{ color: 'white', lineHeight: '1.4' }}>
                            Llegar a ser una Asociación con una sólida estructura organizacional que se mantenga en constante crecimiento y que proporcione apoyo a un cada vez un mayor número de familias
                        </h5>
                    </div>
                    <div className='col-md-4 text-center'>
                        <span style={{ color: 'white', fontSize: '50px', paddingBottom: '10px' }} className='fas fa-cross'></span>
                        <h2 style={{ color: 'white', fontFamily: 'Montserrat', fontWeight: 'bold' }} className='text-center'>Valores</h2>
                        <h5 className='text-center' style={{ color: 'white', lineHeight: '1.4' }}>
                            CARIDAD para los más necesitados, SOLIDARIO ante las difíciles situaciones, IGUALDAD para brindar apoyo a quien más lo necesite y buscando siempre la TRASPARENCIA en sus actividades
                        </h5>
                    </div>
                </div>
            </div>
        )
    }
}