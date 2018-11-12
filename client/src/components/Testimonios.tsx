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
            </div>
        )
    }
}