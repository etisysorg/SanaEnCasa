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
            <div id='contactanos' className='contacto'>
                <h1 style={{ color: '#009ce0', fontFamily: 'Montserrat', paddingTop: '30px', fontWeight: 'bold', paddingBottom: '20px' }} className='text-center'>CONTÁCTANOS</h1>
                <div className='row'>
                    <div className='col-md-4 text-center'>
                        <span style={{ color: '#009ce0', fontSize: '50px', paddingBottom: '10px' }} className='fas fa-phone'></span>
                        <h2 style={{ color: '#009ce0', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '25px', marginBottom: '10px' }} className='text-center'>​8180884803</h2>
                    </div>
                    <div className='col-md-4 text-center'>
                        <span style={{ color: '#009ce0', fontSize: '50px', paddingBottom: '10px' }} className='fas fa-envelope'></span>
                        <h2 style={{ color: '#009ce0', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '23px', marginBottom: '10px'  }} className='text-center'>contacto@sanaencasa.org</h2>
                    </div>
                    <div className='col-md-4 text-center'>
                        <a href='https://www.facebook.com/sanaencasaabp/'><span style={{ color: '#009ce0', fontSize: '50px', paddingBottom: '10px', paddingRight: '10px' }} className='fab fa-facebook'></span></a>
                        <a href='https://www.instagram.com/sanaencasa/'><span style={{ color: '#009ce0', fontSize: '50px', paddingBottom: '10px', paddingRight: '10px' }} className='fab fa-instagram'></span></a>
                        <a href='https://www.youtube.com/channel/UCNG6r8QrVfk5WYGvHQ2qYfA/featured'><span style={{ color: '#009ce0', fontSize: '50px', paddingBottom: '10px' }} className='fab fa-youtube'></span></a>
                        <h2 style={{ color: '#009ce0', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '27px', marginBottom: '10px' }} className='text-center'>Redes sociales</h2>
                    </div>
                </div>
            </div>
        )
    }
}