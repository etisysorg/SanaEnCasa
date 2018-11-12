import * as React from 'react'

const bannerImg = require('./../assets/img/banner1.jpeg')

type State = {
}

type Props = {
}

export default class Banner extends React.Component<Props, State> {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <header className='masthead text-white text-center'>
                    <div className='container'>
                        <div className='overlay'></div>
                        <div className='row'>
                            <div className='col-md-9 mx-auto'>
                                <h1 style={{ color: 'white', fontFamily: 'Montserrat', fontWeight: 'bold' }} className=' text-uppercase'>Equipo médico sin costo para quien más lo necesita</h1>
                                <span style={{ fontSize: '30px'}} className='fa fa-minus'></span>
                                <div className='form-group text-center'>
                                    <a href='#nosotros'><button style={{ fontFamily: 'Montserrat', marginTop: '10px' }} className='btnBackBlanco'>Conócenos</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}