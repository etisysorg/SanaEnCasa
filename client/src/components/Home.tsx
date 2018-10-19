import * as React from 'react'
import NavbarC from './NavbarC'
import Banner from './Banner'
import Nosotros from './Nosotros'
import Quehacemos from './Quehacemos'
import Equipos from './Equipos'
import ComoAyudar from './ComoAyudar'
import Testimonios from './Testimonios'
import Contacto from './Contacto'


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
                <ComoAyudar />
                <Equipos />
                <Testimonios/>
                <Contacto/>
            </div>
        )
    }
}