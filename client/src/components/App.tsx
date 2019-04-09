import * as React from 'react'
import './../assets/scss/App.scss'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import LoginInventario from './Inventario/loginInventario'



type State = {
  currentSeason: string
}

type Props = {
}

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/inventario' component={ LoginInventario } />
    </Switch>
  </main>
)

export default class App extends React.Component<Props, State> {

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Main />
      </div>
    )
  }
}