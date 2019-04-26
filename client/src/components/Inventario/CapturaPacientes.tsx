import * as React from 'react'
import NavbarInventario from './NavbarInventario'
import ReactTable, { Column } from 'react-table'
import { EntityCapture } from '../../shared/EntityCapture'
import { EquipoMedicoModel, EntityType, TipoEquipoMedico, PacienteModel, Sexo, NivelSocioeconomico } from '../../shared/DataTypes'
import { getMatchSorterWrapper } from '../../shared/getMatchSorterWrapper'
import { InputWrapper } from '../../shared/InputWrapper'
import { InputWrapperNumber } from '../../shared/InputWrapperNumber'
import { SelectInputWrapper } from '../../shared/SelectInputWrapper'
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot'
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox'

export default class CapturaPacientes extends EntityCapture<PacienteModel> {

  constructor(props) {
    super(props)

  }

  getEntitiesFriendlyName: () => string = () => {
    return 'Pacientes'
  }

  getEntityFriendlyName: () => string = () => {
    return 'Paciente'
  }

  getEntityType = (): EntityType => {
    return 'paciente'
  }

  getId = (row: PacienteModel): string => {
    return row.id
  }

  getEmptyEntity = (): PacienteModel => {
    return {
      id: '',
      caso: '',
      fecha: '',
      nombre: '',
      edad: 0,
      sexo: Sexo.hombre,
      padecimiento: '',
      responsable: '',
      direccion: '',
      municipio: '',
      telefono: '',
      celular: '',
      correo: '',
      nivelSocioeconomico: NivelSocioeconomico.pobreza,
      descripcionDelCaso: '',
      activo: false,
      fechaEgreso: '',
    }
  }

  getTableColumns = (): Column[] => {
    return [
      {
        columns: [
          {
            Header: 'Clave',
            id: 'id',
            accessor: (d: PacienteModel) => d.id,
            filterMethod: getMatchSorterWrapper('id'),
            filterAll: true,
          },
          {
            Header: 'Nombre',
            id: 'nombre',
            accessor: (d: PacienteModel) => d.nombre,
            filterMethod: getMatchSorterWrapper('nombre'),
            filterAll: true,
          },
          {
            Header: 'Padecimiento',
            id: 'padecimiento',
            accessor: (d: PacienteModel) => d.padecimiento,
            filterMethod: getMatchSorterWrapper('padecimiento'),
            filterAll: true,
          },
        ],
      },
    ]
  }


  renderCaptureUi = () => {
    const currentRow: PacienteModel = this.state.currentRow || this.getEmptyEntity()
    return (
      <div>
        <div className='row'>
          <div className='col-12'>
            <Pivot style={{ marginLeft: '20px', marginTop: '5px' }}>
              <PivotItem linkText='Datos Generales'>
                <div style={{ paddingTop: '20px', paddingLeft: '40px', paddingRight: '40px' }} className='row'>
                  <div className='col-3'>
                    <label>Clave</label>
                    <InputWrapper
                      handleChangeInput={this.createHandleChangeInput((row, val) => row.id = val)}
                      value={currentRow.id}
                      maxLength={20}
                      isClave={true}
                      isEditing={this.state.isEditing} />
                    <label>Caso</label>
                    <InputWrapper
                      handleChangeInput={this.createHandleChangeInput((row, val) => row.caso = val)}
                      value={currentRow.caso}
                      maxLength={20}
                      isClave={false}
                      isEditing={this.state.isEditing} />
                    <label>Padecimiento</label>
                    <InputWrapper
                      handleChangeInput={this.createHandleChangeInput((row, val) => row.padecimiento = val)}
                      value={currentRow.padecimiento}
                      maxLength={20}
                      isClave={false}
                      isEditing={this.state.isEditing} />
                  </div>
                  <div className='col-3'>
                    <label>Fecha</label>
                    <InputWrapper
                      handleChangeInput={this.createHandleChangeInput((row, val) => row.fecha = val)}
                      value={currentRow.fecha}
                      maxLength={20}
                      isClave={false}
                      isEditing={this.state.isEditing} />
                    <label>Nombre</label>
                    <InputWrapper
                      handleChangeInput={this.createHandleChangeInput((row, val) => row.nombre = val)}
                      value={currentRow.nombre}
                      maxLength={20}
                      isClave={false}
                      isEditing={this.state.isEditing} />
                    <label>Edad</label>
                    <InputWrapperNumber
                      value={currentRow.edad}
                      handleChangeInput={this.createHandleChangeInput((row, val) => row.edad = val)}
                      decimalRange={4} />
                  </div>
                  <div className='col-3'>
                    <label>Sexo</label>
                    <SelectInputWrapper<Sexo>
                      handleChangeInput={this.createHandleChangeInput((row, val) => row.sexo = val)}
                      value={currentRow.sexo}
                      optionsEnum={Sexo} />
                    <label>Nivel Socioeconomico</label>
                    <SelectInputWrapper<NivelSocioeconomico>
                      handleChangeInput={this.createHandleChangeInput((row, val) => row.nivelSocioeconomico = val)}
                      value={currentRow.nivelSocioeconomico}
                      optionsEnum={NivelSocioeconomico} />
                    <label>Responsable</label>
                    <InputWrapper
                      handleChangeInput={this.createHandleChangeInput((row, val) => row.responsable = val)}
                      value={currentRow.responsable}
                      maxLength={20}
                      isClave={false}
                      isEditing={this.state.isEditing} />
                  </div>
                  <div className='col-3'>
                    <label>Fecha egreso</label>
                    <InputWrapper
                      handleChangeInput={this.createHandleChangeInput((row, val) => row.fechaEgreso = val)}
                      value={currentRow.fechaEgreso}
                      maxLength={20}
                      isClave={false}
                      isEditing={this.state.isEditing} />
                    <div style={{ marginTop: '25px' }}>
                      <Checkbox
                        checked={currentRow.activo}
                        label='Extranjero'
                        onChange={this.createHandleChangeInput((row, _val) => row.activo = !currentRow.activo)} />
                    </div>
                  </div>
                </div>
              </PivotItem>
              <PivotItem linkText='Datos de contacto'>
                <div className='row'>
                  <div className='col-3'>
                    <label>Telefono</label>
                    <InputWrapper
                      handleChangeInput={this.createHandleChangeInput((row, val) => row.telefono = val)}
                      value={currentRow.telefono}
                      maxLength={20}
                      isClave={false}
                      isEditing={this.state.isEditing} />
                    <label>Celular</label>
                    <InputWrapper
                      handleChangeInput={this.createHandleChangeInput((row, val) => row.celular = val)}
                      value={currentRow.celular}
                      maxLength={20}
                      isClave={false}
                      isEditing={this.state.isEditing} />
                    <label>Correo</label>
                    <InputWrapper
                      handleChangeInput={this.createHandleChangeInput((row, val) => row.correo = val)}
                      value={currentRow.correo}
                      maxLength={20}
                      isClave={false}
                      isEditing={this.state.isEditing} />
                  </div>
                  <div className='col-3'>
                    <label>Direccion</label>
                    <InputWrapper
                      handleChangeInput={this.createHandleChangeInput((row, val) => row.direccion = val)}
                      value={currentRow.direccion}
                      maxLength={20}
                      isClave={false}
                      isEditing={this.state.isEditing} />
                    <label>Municipio</label>
                    <InputWrapper
                      handleChangeInput={this.createHandleChangeInput((row, val) => row.municipio = val)}
                      value={currentRow.municipio}
                      maxLength={20}
                      isClave={false}
                      isEditing={this.state.isEditing} />
                  </div>
                </div>
              </PivotItem>
              <PivotItem linkText='Descripcion Del Caso'>
                <div className='col-12'>
                  <label>Descripcion</label>
                  <InputWrapper
                    handleChangeInput={this.createHandleChangeInput((row, val) => row.descripcionDelCaso = val)}
                    value={currentRow.descripcionDelCaso}
                    maxLength={200}
                    isClave={false}
                    isEditing={this.state.isEditing} />
                </div>
              </PivotItem>
            </Pivot>
          </div>
        </div>
      </div>
    )
  }
}