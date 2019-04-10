import * as React from 'react'
import NavbarInventario from './NavbarInventario'
import CapturaInventario from './CapturaInventario'
import Swal from 'sweetalert2'


type State = {
    username: string,
    password: string
}

type Props = {
}

export default class LoginInventario extends React.Component<Props, State> {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    onChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    onChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    submitedLogin = (event) => {
        // aqui va logica de autenticacion
        event.preventDefault()
        fetch(`http://localhost:3000/login/${this.state.username}/${this.state.password}`)
        .then(function(response) {
            return response.json()
        })
        .then( async function(myJson) {
            console.log(myJson)
            if (myJson) {
                localStorage.setItem('loggedIn', 'true')
                await Swal.fire({
                    type: 'success',
                    title: 'inicio de sesion correcto',
                    showConfirmButton: false,
                    timer: 1000
                })
                window.location.reload(true)
            } else {
            Swal.fire({
                type: 'error',
                title: 'Usuario o Clave incorrecta',
                })
            }
        })
    }

    render() {
        if (localStorage.getItem('loggedIn') === 'true') {
            return <CapturaInventario />
        }
        return (
            <div>
                <NavbarInventario />
                <h1 style={{ marginTop: '40px', marginBottom: '40px', color: '#009ce0' }} className='text-center'>Login</h1>
                <form>
                    <div className='row'>
                        <div className='col-4'></div>
                        <div className='col-4'>
                            <div className='form-group'>
                                <label style={{ color: '#009ce0' }} className=''>Usuario</label>
                                <input className='form-control' placeholder='Teclea usuario' onChange={this.onChangeUsername} />
                            </div>
                            <div className='form-group'>
                                <label style={{ color: '#009ce0' }} className=''>Contraseña</label>
                                <input type='password' className='form-control' placeholder='Teclea contraseña' onChange={this.onChangePassword} />
                            </div>
                        </div>
                        <div className='col-4'></div>
                    </div>
                    <div className='text-center'>
                        <button onClick={this.submitedLogin} className='btn btn-primary text-center'>Entrar</button>
                    </div>
                </form>
            </div>
        )
    }
}