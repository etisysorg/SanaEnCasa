import * as React from 'react'
import { RingLoader } from 'react-spinners'

type State = {
}

type Props = {
}

export class RingLoaderWrapper extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className='text-center' style={ { width: '200px', margin: '30px auto' } }>
          <RingLoader
            color='#009ce0'
            size={ 200 } />
        </div>
        <h1 className='text-center' style={ { color: '#009ce0', fontSize: '30px', marginTop: '20px' } }>Inventario SanaEnCasa</h1>
      </div>
    )
  }
}