import * as React from 'react'
const testimonioBenito = require('./../assets/img/testimonioBenito.jpg')

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
            <div style={{ paddingLeft: '40px', paddingRight: '40px' }} id='testimonios' className='testimonios'>
                <h1 className='text-center' style={{ fontFamily: 'Montserrat', color: 'white', fontWeight: 'bold', paddingBottom: '15px', paddingTop: '30px' }}>TESTIMONIOS</h1>
                <div className='row'>
                    <div className='col-md-4 text-center'>
                        <img className='imgTestimonio' style={{ width: '250px' }} src={testimonioBenito} alt='' />
                        <h4 style={{ color: 'white', lineHeight: '1.2' }}>
                            Testimonio de benito: Sana en casa le proporciono una ¡silla de ruedas scooter! esto le permitió tener mayor independencia y mejorar su calidad de vida
                        </h4>
                    </div>
                    <div className='col-md-4'>
                    </div>
                    <div className='col-md-4'>
                    </div>
                </div>
            </div>
        )
    }
}