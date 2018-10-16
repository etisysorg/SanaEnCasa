import * as React from 'react'
import NavbarC from './NavbarC'
import Banner from './Banner'
import Nosotros from './Nosotros'
import Quehacemos from './Quehacemos'

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
            <div>
                <NavbarC />
                <Banner />
                <Nosotros />
                <Quehacemos/>
            </div>
        )
    }
}