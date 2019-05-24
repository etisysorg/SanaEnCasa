import * as React from 'react'
const testimonioBenito = require('./../assets/img/testimonioBenito.jpg')
const testimonioCristofer = require('./../assets/img/cristofer.png')
const testimonioSixta = require('./../assets/img/sixta.jpg')

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
            <div style={{ paddingLeft: '40px', paddingRight: '40px', border: '4px dashed white' }} id='testimonios' className='testimonios'>
                <h1 className='text-center' style={{ fontFamily: 'Montserrat', color: 'white', fontWeight: 'bold', paddingBottom: '15px', paddingTop: '30px' }}>TESTIMONIOS</h1>
                <div className='row'>
                    <div className='col-md-4 text-center'>
                        <a target='_blank' href='https://www.youtube.com/watch?v=1JVlMO7v0Mo'><img className='imgTestimonio' style={{ width: '250px' }} src={testimonioBenito} alt='' /></a>
                        <h4 style={{ color: 'white', lineHeight: '1.2' }}>
                            Testimonio de Benito: Sana En Casa le proporciono una ¡silla de ruedas scooter! esto le permitió tener mayor independencia y mejorar su calidad de vida
                        </h4>
                    </div>
                    <div className='col-md-4 text-center'>
                        <a target='_blank' href='https://youtu.be/PdNHU8LSV4o'><img className='imgTestimonio' style={{ width: '250px' }} src={testimonioCristofer} alt='' /></a>
                        <h4 style={{ color: 'white', lineHeight: '1.2' }}>
                            Testimonio de Cristofer: Sana En Casa le proporciono una cama de hospital, que le ayudó a recuperarse más rapidamente
                        </h4>
                    </div>
                    <div className='col-md-4 text-center'>
                    <a target='_blank' href='https://www.youtube.com/watch?v=ImS8-Weqo1A&feature=youtu.be'><img className='imgTestimonio' style={{ width: '250px' }} src={testimonioSixta} alt='' /></a>
                        <h4 style={{ color: 'white', lineHeight: '1.2' }}>
                            Testimonio de Sixta: Sana En Casa le proporciono una cama y una silla de ruedas que han permitido que mejore su vida diaria
                        </h4>
                    </div>
                </div>
            </div>
        )
    }
}