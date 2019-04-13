import * as React from 'react'
import { Column } from 'react-table'
import { AddDeleteWrapper } from './AddDeleteWrapper'
import { CapturaHeader } from './CapturaHeader'
import { EntityType } from './DataTypes'
import { DialogMessages } from './DialogMessages'
import { EditCreateWrapper } from './EditCreateWrapper'
import { ReactTableWrapper } from './ReactTableWrapper'
import { RestApi } from './RestApi'
import { RingLoaderWrapper } from './RingLoaderWrapper'
import NavbarInventario from '../components/Inventario/NavbarInventario'

interface IState<T> {
  fullData: T[] | undefined
  isEditing: boolean
  currentRow: T | undefined
  isSaving: boolean
}

type Props = {
}

export abstract class EntityCapture<T> extends React.Component<Props, IState<T>> {
  public reactTableWrapper = React.createRef<ReactTableWrapper<T>>()
  private restApi: RestApi<T>
  constructor(props: Props) {
    super(props)
    this.state = {
      fullData: undefined,
      isEditing: true,
      currentRow: undefined,
      isSaving: false,
    }
  }

  abstract getId: (row: T) => string
  abstract getEmptyEntity: () => T
  abstract getEntityFriendlyName: () => string
  abstract getEntitiesFriendlyName: () => string
  abstract getEntityType: () => EntityType
  abstract renderCaptureUi: () => JSX.Element
  abstract getTableColumns: () => Column[]
  // tslint:disable-next-line:no-empty
  getForeignFullData: () => Promise<void> = async () => { }

  async componentDidMount() {
    // Intentionally not awaited
    this.getForeignFullData()
    this.restApi = new RestApi<T>(this.getEntityType())

    try {
      const fullData = await this.restApi.getEntities()
      this.setState({
        fullData: fullData,
        currentRow: fullData && fullData.length > 0 ? fullData[0] : undefined,
      })
    } catch (error) {
      await DialogMessages.showErrorMessage(error)
    }
  }

  onDeleteClicked = async () => {
    if (!this.state.currentRow || !this.state.fullData) {
      return
    }

    const result = await DialogMessages.areYouSureDeleteDialog()
    if (result.value) {
      try {
        this.setState({ isSaving: true })
        await this.restApi.deleteEntity(this.getId(this.state.currentRow))
        const newArray: T[] = []
        for (const row of this.state.fullData) {
          if (this.getId(row) !== this.getId(this.state.currentRow)) {
            newArray.push(row)
          }
        }
        this.setState({
          fullData: newArray,
          isSaving: false,
          currentRow: this.getEmptyEntity(),
        }, async () => {
          await DialogMessages.simpleNotificationDialog('Borrado', 'success', `${this.getEntityFriendlyName()} ha sido borrad@ correctamente`)
        })
      } catch (error) {
        await DialogMessages.showErrorMessage(error)
        this.setState({ isSaving: false })
      }
    }
  }

  editEntity = async () => {
    if (!this.state.currentRow || !this.state.fullData) {
      return
    }

    try {
      this.setState({ isSaving: true })
      await this.restApi.editEntity(this.state.currentRow, this.getId(this.state.currentRow))
      const newArray: T[] = []
      for (const row of this.state.fullData) {
        if (this.getId(row) !== this.getId(this.state.currentRow)) {
          newArray.push(row)
        } else {
          newArray.push(this.state.currentRow)
        }
      }
      this.setState({
        fullData: newArray,
        isSaving: false,
      }, async () => {
        await DialogMessages.simpleNotificationDialog('Editado', 'success', `${this.getEntityFriendlyName()} ha sido editad@ correctamente`)
      })
    } catch (error) {
      await DialogMessages.showErrorMessage(error)
      this.setState({ isSaving: false })
    }
  }

  createEntity = async () => {
    if (!this.state.currentRow || !this.state.fullData) {
      return
    }

    this.setState({ isSaving: true })
    try {
      const rowAdded = await this.restApi.addEntity(this.state.currentRow)
      this.setState({
        isEditing: true,
        fullData: [...this.state.fullData, rowAdded],
        currentRow: rowAdded,
        isSaving: false,
      }, async () => {
        this.scrollToCurrentRow()
        await DialogMessages.simpleNotificationDialog('Creado', 'success', `${this.getEntityFriendlyName()} ha sido agregad@`)
      })
    } catch (error) {
      await DialogMessages.showErrorMessage(error)
      this.setState({ isSaving: false })
    }
  }

  scrollToCurrentRow = () => {
    const current = this.reactTableWrapper.current
    if (current) {
      current.scrollToCurrentRow()
    }
  }

  onCreateClicked = () => {
    const rowEmpty: T = this.getEmptyEntity()
    this.setState({
      isEditing: false,
      currentRow: rowEmpty,
    })
  }

  onRowClicked = (original: T) => {
    this.setState({
      currentRow: original,
      isEditing: true,
    })
  }

  onCurrentRowUpdated = (row: T) => {
    this.setState({
      currentRow: row,
    })
  }

  onSaveClicked = () => {
    if (this.state.isEditing) {
      this.editEntity()
    } else {
      this.createEntity()
    }
  }

  isCurrentRowEqualToOriginal = (): boolean => {
    if (!this.state.fullData || !this.state.currentRow) {
      return false
    }
    for (const row of this.state.fullData) {
      if (this.getId(row) === this.getId(this.state.currentRow)) {
        if (row === this.state.currentRow) {
          return true
        }
      }
    }
    return false
  }

  createHandleChangeInput<T2>(myFunc: (row: T, tempVal: T2) => void) {
    return (newVal: T2) => {
      if (!this.state.currentRow) {
        return
      }
      const rowSelected: T = Object.assign({}, this.state.currentRow)
      myFunc(rowSelected, newVal)
      this.onCurrentRowUpdated(rowSelected)
    }
  }

  render() {
    if (!this.state.fullData) {
      return ( <RingLoaderWrapper /> )
    }

    return (
      <div>
        <NavbarInventario />
        <CapturaHeader title={ `Captura ${this.getEntitiesFriendlyName()}` } />
        <ReactTableWrapper<T>
          ref={ this.reactTableWrapper }
          data={ this.state.fullData }
          columns={ this.getTableColumns() }
          onRowClicked={ this.onRowClicked }
          currentRow={ this.state.currentRow }
          highlightSelectedRow={ this.state.isEditing }
          getId={ this.getId } />
        <AddDeleteWrapper
         isSaving={ this.state.isSaving }
         isEditing={ this.state.isEditing }
         onDeleteClicked={ this.onDeleteClicked }
         onCreateClicked={ this.onCreateClicked } />
        { this.renderCaptureUi() }
        <div style={ { marginTop: '15px' } } className='text-center'>
          <EditCreateWrapper
           isEditing={ this.state.isEditing }
           isSaving={ this.state.isSaving }
           onEditClicked={ this.onSaveClicked }
           onCreateClicked={ this.onSaveClicked }
           isCurrentRowEqualToOriginal={ this.isCurrentRowEqualToOriginal() }/>
        </div>
      </div>
    )
  }
}