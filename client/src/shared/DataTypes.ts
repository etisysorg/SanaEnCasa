export type EntityType = 'equipoMedico' | 'paciente'


export type FormatoUsuario = {
    usuario: string,
    clave: string
}

export type EquipoMedicoModel = {
    id: string,
    nombre: string,
}

export type PacienteModel = {
    id: string,
    nombre: string,
}