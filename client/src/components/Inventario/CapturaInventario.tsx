import * as React from 'react'
import NavbarInventario from './NavbarInventario'

type State = {
}

type Props = {
}

export default class CapturaInventario extends React.Component<Props, State> {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <NavbarInventario />
                <h1>Logged In</h1>
            </div>
        )
    }
}