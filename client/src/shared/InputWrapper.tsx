import * as React from 'react'

type State = {
}

type Props = {
  handleChangeInput: (input: string) => void
  value: string
  maxLength: number
  isClave: boolean
  isEditing: boolean
}

export class InputWrapper extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
  }

  private handleChangeInputInternal = (event: React.FormEvent<HTMLInputElement>) => {
    this.props.handleChangeInput(event.currentTarget.value)
  }

  render() {
    return (
      <div>
        <form action='#' autoComplete='off'>
        <input
         autoComplete='off'
         className={ this.props.isClave ? 'form-control font-weight-bold' : 'form-control' }
         type='text'
         value={ this.props.value }
         readOnly={ this.props.isClave ? this.props.isEditing : false }
         onChange={ this.handleChangeInputInternal }
         maxLength={ this.props.maxLength }  />
        </form>
      </div>
    )
  }
}