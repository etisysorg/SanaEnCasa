import * as React from 'react'

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
            <div id='testimonios' className='testimonios'>
                <h1 style={{ color: 'white', fontFamily: 'Montserrat', paddingTop: '30px', fontWeight: 'bold', paddingBottom: '20px' }} className='text-center'>TESTIMONIOS</h1>
                <h4 style={{ color: 'white', fontSize: '20px', lineHeight: '1.4' }} className='text-center'>
                    Les presentamos el caso del señor Benito, el  sufre de una enfermedad llamada escoliosis que le ha imposibilitado realizar diversas actividades de la vida diaria, así mismo no tiene fuerzas en sus brazos y manos, por ello su esposa Josefina lo cuidaba en todo momento. Sin embargo el a sus 60 años no se ha dado por vencido, sus ganas de salir adelante son muchas y su entusiasmo ¡ni se diga!.
                </h4>
                <h4 style={{ color: 'white', fontSize: '20px', lineHeight: '1.4' }} className='text-center'>
                    Sana en Casa conoció al señor Benito por azares del destino para mejorar su calidad de vida. Al ver su necesidad Sana En Casa le proporciono una ¡Silla de ruedas scooter! Esto le permitió tener mayor independencia y mejorar su calidad de vida.
                </h4>
                <div className='embed-responsive embed-responsive-21by9'>
                    <iframe allowFullScreen className='embed-responsive-item' src='https://www.youtube.com/embed/1JVlMO7v0Mo'></iframe>
                </div>
            </div>
        )
    }
}