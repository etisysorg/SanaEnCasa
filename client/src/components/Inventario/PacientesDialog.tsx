import { Column } from 'react-table'
import { PacienteModel, EntityType } from '../../shared/DataTypes'
import { getMatchSorterWrapper } from '../../shared/getMatchSorterWrapper'
import { ForeignKeyDialog } from '../../shared/ForeignKeyDialog'

export class PacientesDialog extends ForeignKeyDialog<PacienteModel> {
  getId: (row: PacienteModel) => string = (row: PacienteModel) => {
    return row.id
  }
  getNombre: (row: PacienteModel) => string = (row: PacienteModel) => {
    return row.nombre
  }
  claveMaxLength: number = 50
  getColumns: () => Column<PacienteModel>[] = () => {
    return [
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
    ]
  }
  getFriendlyTableName: () => string = () => {
    return 'Pacientes'
  }
  getEntityName: () => EntityType = () => {
    return 'paciente'
  }
}