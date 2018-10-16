import * as React from 'react'

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
            <div>
                <div className='queHacemos text-center'>
                    <h1 className='text-center' style={{ fontFamily: 'Montserrat', color: '#009ce0', fontWeight: 'bold', paddingBottom: '20px', paddingTop: '30px' }}>QUE HACEMOS</h1>
                    <div className='row'>
                    <div className='col-md-4 text-center'>
                        <h3 style={{ color: '#009ce0', fontFamily: 'Montserrat', fontWeight: 'bold' }} className='text-center'>Prestamos de equipo médico</h3>
                    </div>
                    <div className='col-md-4 text-center'>
                        <h3 style={{ color: '#009ce0', fontFamily: 'Montserrat', fontWeight: 'bold' }} className='text-center'>Pañales para adulto</h3>
                    </div>
                    <div className='col-md-4 text-center'>
                        <h3 style={{ color: '#009ce0', fontFamily: 'Montserrat', fontWeight: 'bold' }} className='text-center'>Brigadas de ayuda</h3>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}