import * as React from 'react'

type State = {
}

type Props = {
  title: string
}

export class CapturaHeader extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <h1 style={ { paddingTop: '5px', paddingBottom: '5px', color: 'black', fontSize: '22px', marginBottom: '3px' } } className='text-center'>{ this.props.title }</h1>
    )
  }
}