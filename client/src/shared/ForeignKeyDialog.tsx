import { Dialog, DialogType } from 'office-ui-fabric-react/lib/Dialog'
import { DirectionalHint, TooltipHost } from 'office-ui-fabric-react/lib/Tooltip'
import * as React from 'react'
import { Column } from 'react-table'
import { EntityType } from './DataTypes'
import { ReactTableWrapper } from './ReactTableWrapper'
import { RestApi } from './RestApi'

interface IState<T> {
  data: T[] | undefined
  currentRow: T | undefined
  dialogHidden: boolean
}

interface IProps {
  onClaveChanged: (id: string) => void
  clave: string
}

export abstract class ForeignKeyDialog<T> extends React.Component<IProps, IState<T>> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      data: undefined,
      currentRow: undefined,
      dialogHidden: true,
    }
  }

  abstract getId: (row: T) => string
  abstract getNombre: (row: T) => string
  abstract claveMaxLength: number
  abstract getColumns: () => Column<T>[]
  abstract getFriendlyTableName: () => string
  abstract getEntityName: () => EntityType

  async componentDidMount() {
    const restApi = new RestApi<T>(this.getEntityName())
    const data = await restApi.getEntities()
    this.setState({
      data: data,
    })
  }

  componentDidUpdate(_previousProps: IProps, previousState: IState<T>) {
    if (previousState.dialogHidden === true && this.state.dialogHidden === false) {
      let currentRow: T | undefined = undefined
      if (!this.state.data) {
        return
      }
      if (this.props.clave === '') {
        this.setState({
          currentRow: this.state.data[0],
        })
        return
      }
      for (const row of this.state.data) {
        if (this.getId(row) === this.props.clave) {
          currentRow = row
          this.setState({
            currentRow: currentRow,
          })
          return
        }
      }
    }
  }

  closeDialogAndSendKey = () => {
    if (!this.state.currentRow) {
      return
    }
    this.props.onClaveChanged(this.getId(this.state.currentRow))
    this.setState({
      dialogHidden: true,
    })
  }

  closeDialogAndDontSendKey = () => {
    this.setState({
      dialogHidden: true,
    })
  }

  onDismiss = () => this.closeDialogAndDontSendKey()

  onRowClicked = (original: T) => {
    this.setState({
      currentRow: original,
    })
  }

  claveKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'F2') {
      this.setState({
        dialogHidden: false,
      })
    }
  }

  getDisplayNombre = (): string => {
    if (!this.props.clave || !this.state.data) {
      return ''
    }
    for (const row of this.state.data) {
      if (this.getId(row) === this.props.clave) {
        return this.getNombre(row)
      }
    }
    return ''
  }

  onClaveChangedInternal = (event: React.FormEvent<HTMLInputElement>) => {
    if (!event.currentTarget.value && event.currentTarget.value !== '') {
      return
    }
    this.props.onClaveChanged(event.currentTarget.value)
  }

  onRowEnterDown = (_row: T) => {
    this.closeDialogAndSendKey()
  }

  onRowDoubleClicked = (_row: T) => {
    this.closeDialogAndSendKey()
  }

  render() {
    return (
      <div>
        <TooltipHost content={ 'Presiona F2 para abrir tabla de ' + this.getFriendlyTableName() } calloutProps={ { gapSpace: 0 } } directionalHint={ DirectionalHint.rightCenter }>
        <input
          className='form-control'
          onChange={ this.onClaveChangedInternal }
          onKeyDown={ this.claveKeyDown }
          value={ this.props.clave }
          maxLength={ this.claveMaxLength } />
        </TooltipHost>
        <h5 style={{ backgroundColor: '#009ce0', color: 'white' }} className='font-italic fontForeign'>{ this.getDisplayNombre() }</h5>
        <Dialog
          hidden={ this.state.dialogHidden }
          onDismiss={ this.onDismiss }
          dialogContentProps={ {
            type: DialogType.largeHeader,
            title: this.getFriendlyTableName(),
          } }
          minWidth='800px'
          modalProps={ {
            isBlocking: false,
            containerClassName: 'ms-dialogMainOverride',
          } } >
          { this.state.data &&
            <ReactTableWrapper<T>
              data={ this.state.data }
              columns={ this.getColumns() }
              onRowClicked={ this.onRowClicked }
              highlightSelectedRow={ true }
              currentRow={ this.state.currentRow }
              onRowDoubleClicked={ this.onRowDoubleClicked }
              onRowEnterDown={ this.onRowEnterDown }
              getId={ this.getId } />
            }
          <div style={ { paddingTop: '20px' } } className='row'>
            <div className='col-2'/>
            <div className='col-4 text-center'>
              <button style={ { paddingRight: '10px' } } className='btn btn-primary' onClick={ this.closeDialogAndSendKey }>Seleccionar</button>
            </div>
            <div className='col-4 text-center'>
              <button className='btn btn-danger' onClick={ this.closeDialogAndDontSendKey }>Cancelar</button>
            </div>
          </div>
        </Dialog>
      </div>
    )
  }
}