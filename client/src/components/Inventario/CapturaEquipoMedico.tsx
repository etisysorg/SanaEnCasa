import * as React from 'react'
import NavbarInventario from './NavbarInventario'
import ReactTable, { Column } from 'react-table'
import { EntityCapture } from '../../shared/EntityCapture'
import { EquipoMedicoModel, EntityType, TipoEquipoMedico } from '../../shared/DataTypes'
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
                <label>Codigo</label>
                <InputWrapperNumber
                  value={ currentRow.codigo }
                  handleChangeInput={ this.createHandleChangeInput((row, val) => row.codigo = val) }
                  decimalRange={ 4 } />
                <label>Donador</label>
                <InputWrapper
                  handleChangeInput={ this.createHandleChangeInput((row, val) => row.donador = val) }
                  value={ currentRow.donador }
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