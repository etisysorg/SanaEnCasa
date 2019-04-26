import * as React from 'react'

type State = {
}

type Props<T> = {
  // tslint:disable-next-line:no-any
  handleChangeInput: (input: T) => void
  value: string
  // tslint:disable-next-line:no-any
  optionsEnum: any
}

export class SelectInputWrapper<T> extends React.Component<Props<T>, State> {

  constructor(props: Props<T>) {
    super(props)
  }

  private handleChangeInputInternal = (event: React.FormEvent<HTMLSelectElement>) => {
    // tslint:disable-next-line:no-any
    const text: T = event.currentTarget.value as any
    this.props.handleChangeInput(text)
  }

  render() {
    return (
      <div>
        <form action='#' autoComplete='off'>
        <select
         className='form-control'
         value={ this.props.value }
         onChange={ this.handleChangeInputInternal } >
         { Object.keys(this.props.optionsEnum).map((key, index) => {
           return (
             <option value={ key } aria-selected={ true } key={ index }>{ this.props.optionsEnum[key] }</option>
           )
         }) }
         </select>
        </form>
      </div>
    )
  }
}