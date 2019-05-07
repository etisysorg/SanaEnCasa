import * as React from 'react'
import NavbarInventario from './NavbarInventario'
import ReactTable, { Column } from 'react-table'
import { EntityCapture } from '../../shared/EntityCapture'
import { EquipoMedicoModel, EntityType, TipoEquipoMedico } from '../../shared/DataTypes'
import { getMatchSorterWrapper } from '../../shared/getMatchSorterWrapper'
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot'
import { InputWrapper } from '../../shared/InputWrapper'
import { InputWrapperNumber } from '../../shared/InputWrapperNumber'
import { SelectInputWrapper } from '../../shared/SelectInputWrapper'
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox'

export default class CapturaEquipoMedico extends EntityCapture<EquipoMedicoModel> {

  constructor(props) {
    super(props)

  }

  getEntitiesFriendlyName: () => string = () => {
    return 'Equipos Medicos'
  }

  getEntityFriendlyName: () => string = () => {
    return 'Equipo Medico'
  }

  getEntityType = (): EntityType => {
    return 'equipoMedico'
  }

  getId = (row: EquipoMedicoModel): string => {
    return row.id
  }

  getEmptyEntity = (): EquipoMedicoModel => {
    return {
      id: '',
      codigo: 0,
      tipoDeEquipoMedico: TipoEquipoMedico.aspiradorDeSecreciones,
      descripcion: '',
      caso: '',
      donador: '',
      factura: '',
      fechaDeCompra: '',
      casosAnteriores: '',
      activo: false,
      fechaDeBaja: '',
      razonDeBaja: '',
    }
  }

  getTableColumns = (): Column[] => {
    return [
      {
        columns: [
          {
            Header: 'Clave',
            id: 'id',
            accessor: (d: EquipoMedicoModel) => d.id,
            filterMethod: getMatchSorterWrapper('id'),
            filterAll: true,
          },
          {
            Header: 'Codigo',
            id: 'codigo',
            accessor: (d: EquipoMedicoModel) => d.codigo,
            filterMethod: getMatchSorterWrapper('codigo'),
            filterAll: true,
          },
          {
            Header: 'Donador',
            id: 'donador',
            accessor: (d: EquipoMedicoModel) => d.donador,
            filterMethod: getMatchSorterWrapper('donador'),
            filterAll: true,
          },
        ],
      },
    ]
  }


  renderCaptureUi = () => {
    const currentRow: EquipoMedicoModel = this.state.currentRow || this.getEmptyEntity()
    return (
      <div className='row'>
        <div className='col-12'>
          <div style={{ paddingTop: '20px', paddingLeft: '40px', paddingRight: '40px' }} className='row'>
            <div className='col-3'>
              <label>Clave</label>
              <InputWrapper
                handleChangeInput={this.createHandleChangeInput((row, val) => row.id = val)}
                value={currentRow.id}
                maxLength={20}
                isClave={true}
                isEditing={this.state.isEditing} />
              <label>Codigo</label>
              <InputWrapperNumber
                value={currentRow.codigo}
                handleChangeInput={this.createHandleChangeInput((row, val) => row.codigo = val)}
                decimalRange={4} />
              <label>Tipo de equipo medico</label>
              <SelectInputWrapper<TipoEquipoMedico>
                handleChangeInput={this.createHandleChangeInput((row, val) => row.tipoDeEquipoMedico = val)}
                value={currentRow.tipoDeEquipoMedico}
                optionsEnum={TipoEquipoMedico} />
            </div>
            <div className='col-3'>
            <label>Caso</label>
              <InputWrapper
                handleChangeInput={this.createHandleChangeInput((row, val) => row.caso = val)}
                value={currentRow.caso}
                maxLength={20}
                isClave={false}
                isEditing={this.state.isEditing} />
            <label>Donador</label>
              <InputWrapper
                handleChangeInput={this.createHandleChangeInput((row, val) => row.donador = val)}
                value={currentRow.donador}
                maxLength={20}
                isClave={false}
                isEditing={this.state.isEditing} />
            <label>Factura</label>
              <InputWrapper
                handleChangeInput={this.createHandleChangeInput((row, val) => row.factura = val)}
                value={currentRow.factura}
                maxLength={20}
                isClave={false}
                isEditing={this.state.isEditing} />
            </div>
            <div className='col-3'>
            <label>Fecha de compra</label>
              <InputWrapper
                handleChangeInput={this.createHandleChangeInput((row, val) => row.fechaDeCompra = val)}
                value={currentRow.fechaDeCompra}
                maxLength={20}
                isClave={false}
                isEditing={this.state.isEditing} />
            <label>Fecha de baja</label>
              <InputWrapper
                handleChangeInput={this.createHandleChangeInput((row, val) => row.fechaDeBaja = val)}
                value={currentRow.fechaDeBaja}
                maxLength={20}
                isClave={false}
                isEditing={this.state.isEditing} />
            <label>Casos Anteriores</label>
              <InputWrapper
                handleChangeInput={this.createHandleChangeInput((row, val) => row.casosAnteriores = val)}
                value={currentRow.casosAnteriores}
                maxLength={20}
                isClave={false}
                isEditing={this.state.isEditing} />
            </div>
            <div className='col-3'>
            <label>Razon de baja</label>
              <InputWrapper
                handleChangeInput={this.createHandleChangeInput((row, val) => row.razonDeBaja = val)}
                value={currentRow.razonDeBaja}
                maxLength={20}
                isClave={false}
                isEditing={this.state.isEditing} />
                <div style={{ marginTop: '25px' }}>
                  <Checkbox
                    checked={currentRow.activo}
                    label='Activo'
                    onChange={this.createHandleChangeInput((row, _val) => row.activo = !currentRow.activo)} />
                </div>
              <label>Descripcion</label>
              <InputWrapper
                handleChangeInput={this.createHandleChangeInput((row, val) => row.descripcion = val)}
                value={currentRow.descripcion}
                maxLength={20}
                isClave={false}
                isEditing={this.state.isEditing} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}