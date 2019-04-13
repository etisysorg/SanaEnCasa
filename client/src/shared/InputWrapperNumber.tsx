import * as React from 'react'

type State = {
  currentText: string
}

type Props = {
  value: number
  handleChangeInput: (input: number) => void
  decimalRange: number
}

export class InputWrapperNumber extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      currentText: '',
    }
    super(props)
  }

  componentDidMount() {
    this.setState({
      currentText: String(this.props.value),
    })
  }

  componentDidUpdate(_previousProps: Props, _previousState: State) {
    if (Number(this.state.currentText) !== this.props.value) {
      const currentText: string = String(this.props.value)
      this.setState({
        currentText: currentText,
      })
    }
  }

  validateNumber = (event: React.FormEvent<HTMLInputElement>) => {
    if (!event.target) {
      return
    }
    const num: string = event.currentTarget.value
    if (Number(num) >= 0) {
      if ((num.split('.')[1] || []).length > this.props.decimalRange) {
        return
      }
      this.setState({
        currentText: event.currentTarget.value,
      })
      this.props.handleChangeInput(Number(event.currentTarget.value))
    }
  }

  render() {
    return (
      <div>
        <form action='#' autoComplete='off'>
          <input
            className='form-control'
            autoComplete='off'
            onChange={ this.validateNumber }
            value={ this.state.currentText }
            type='text'
            maxLength={ 12 } />
        </form>
      </div>
    )
  }
}