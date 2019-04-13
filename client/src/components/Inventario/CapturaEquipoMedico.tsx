import * as React from 'react'
import NavbarInventario from './NavbarInventario'
import ReactTable, { Column } from 'react-table'
import { EntityCapture } from '../../shared/EntityCapture'
import { EquipoMedicoModel, EntityType } from '../../shared/DataTypes'
import { getMatchSorterWrapper } from '../../shared/getMatchSorterWrapper'
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot'
import { InputWrapper } from '../../shared/InputWrapper'
import { InputWrapperNumber } from '../../shared/InputWrapperNumber'

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
          nombre: '',
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
                Header: 'Nombre',
                id: 'AgenteNombre',
                accessor: (d: EquipoMedicoModel) => d.id,
                filterMethod: getMatchSorterWrapper('id'),
                filterAll: true,
              },
            ],
          },
        ]
      }


      renderCaptureUi = () => {
        const currentRow: EquipoMedicoModel = this.state.currentRow || this.getEmptyEntity()
        return (
          <div>
            <div style={ { paddingTop: '20px', paddingLeft: '40px', paddingRight: '40px' } } className='row'>
              <div className='col-3'>
                <label htmlFor='clave'>Clave</label>
                <InputWrapper
                  handleChangeInput={ this.createHandleChangeInput((row, val) => row.id = val) }
                  value={ currentRow.id }
                  maxLength={ 20 }
                  isClave={ true }
                  isEditing={ this.state.isEditing } />
                <label style={ { paddingTop: '15px' } } htmlFor='Nombre'>Nombre</label>
                <InputWrapper
                  handleChangeInput={ this.createHandleChangeInput((row, val) => row.id = val) }
                  value={ currentRow.id }
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