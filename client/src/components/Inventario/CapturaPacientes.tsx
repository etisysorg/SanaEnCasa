import * as React from 'react'
import NavbarInventario from './NavbarInventario'
import ReactTable, { Column } from 'react-table'
import { EntityCapture } from '../../shared/EntityCapture'
import { EquipoMedicoModel, EntityType, TipoEquipoMedico, PacienteModel, Sexo, NivelSocioeconomico } from '../../shared/DataTypes'
import { getMatchSorterWrapper } from '../../shared/getMatchSorterWrapper'
import { InputWrapper } from '../../shared/InputWrapper'
import { InputWrapperNumber } from '../../shared/InputWrapperNumber'

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
                Header: 'Caso',
                id: 'caso',
                accessor: (d: PacienteModel) => d.caso,
                filterMethod: getMatchSorterWrapper('caso'),
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
            <div style={ { paddingTop: '20px', paddingLeft: '40px', paddingRight: '40px' } } className='row'>
              <div className='col-3'>
                <label>Clave</label>
                <InputWrapper
                  handleChangeInput={ this.createHandleChangeInput((row, val) => row.id = val) }
                  value={ currentRow.id }
                  maxLength={ 20 }
                  isClave={ true }
                  isEditing={ this.state.isEditing } />
                <label>Caso</label>
                <InputWrapper
                  handleChangeInput={ this.createHandleChangeInput((row, val) => row.caso = val) }
                  value={ currentRow.caso }
                  maxLength={ 20 }
                  isClave={ false }
                  isEditing={ this.state.isEditing } />
                <label>Padecimiento</label>
                <InputWrapper
                  handleChangeInput={ this.createHandleChangeInput((row, val) => row.padecimiento = val) }
                  value={ currentRow.padecimiento }
                  maxLength={ 20 }
                  isClave={ false }
                  isEditing={ this.state.isEditing } />
              </div>
              <div className='col-6'/>
            </div>
          </div>
        )
      }
    }