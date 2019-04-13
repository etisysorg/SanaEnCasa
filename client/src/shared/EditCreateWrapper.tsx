import * as React from 'react'
import { ClipLoader } from 'react-spinners'

type State = {
}

type Props = {
  isEditing: boolean
  isSaving: boolean
  isCurrentRowEqualToOriginal: boolean
  onEditClicked: () => void
  onCreateClicked: () => void
}

export class EditCreateWrapper extends React.Component<Props, State> {

  render() {
    if (this.props.isSaving) {
      return (
        <div>
          <ClipLoader
            sizeUnit='px'
            size={ 55 }
            color='#1E90FF' />
        </div>
      )
    }
    return (
      <div>
        { this.props.isEditing ?
          <button
            disabled={ this.props.isSaving || this.props.isCurrentRowEqualToOriginal }
            onClick={ this.props.onEditClicked }
            className={ this.props.isCurrentRowEqualToOriginal ? 'btn btn-secondary' : 'btn btn-primary' }>Editar<span style={ { marginLeft: '5px' } } className='fas fa-edit' />
          </button> :
          <button
            onClick={ this.props.onCreateClicked }
            className='btn btn-success'>Crear<span style={ { marginLeft: '5px' } } className='fas fa-plus' />
          </button> }
      </div>
    )
  }
}