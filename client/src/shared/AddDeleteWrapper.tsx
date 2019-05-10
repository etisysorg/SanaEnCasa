import * as React from 'react'

type State = {
}

type Props = {
  isEditing: boolean
  isSaving: boolean
  onCreateClicked: () => void
  onDeleteClicked: () => void
  onImagePressed: (event: any) => void
}

export class AddDeleteWrapper extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.isEditing ?
          <div>
            <div className='float-right plus-trash'>
              <label className='custom-file-upload'>
                <input
                  onChange={ this.props.onImagePressed }
                  type='file'
                  disabled={this.props.isSaving} />
                  <i style={{ fontSize: '36px', color: 'blue', border: '0', backgroundColor: 'white', marginRight: '20px', marginLeft: '1 px' }} className='far fa-image'></i>
              </label>
            </div>
            <div className='float-right plus-trash'>
              <button
                disabled={this.props.isSaving}
                onClick={this.props.onDeleteClicked}
                style={{ fontSize: '36px', color: 'red', border: '0', backgroundColor: 'white', marginRight: '20px', marginLeft: '3px' }}
                className='fas fa-trash-alt' />
            </div>
          </div>
          : null}
        <div className='float-right plus-trash'>
          <button
            disabled={this.props.isSaving}
            onClick={this.props.onCreateClicked}
            style={{ fontSize: '36px', color: '#228B22', border: '0', backgroundColor: 'white' }}
            className='fas fa-plus-circle' />
        </div>
      </div>
    )
  }
}