export type EntityType = 'equipoMedico' | 'paciente'

export enum NivelSocioeconomico {
    pobreza = 'pobreza',
    pobrezaModerada = 'pobrezaModerada',
    pobrezaExtrema = 'pobrezaExtrema',
}

export enum Sexo  {
    hombre = 'hombre',
    mujer = 'mujer',
}

export enum TipoEquipoMedico {
    camaDeHospitalManual = 'CamaDeHospitalManual',
    camaDeHospitalElectrica = 'CamaDeHospitalElectrica',
    gruaElevapacientes = 'GrueElevaPacientes',
    sillaDeRuedas = 'SillaDeRuedas',
    aspiradorDeSecreciones = 'AspiradorDeSecreciones',
    colchonAntillagas = 'ColchonAntillagas',
    conectradorDeOxigeno = 'ConcentradorDeOxigeno',
    otros = 'otros',
}


export type FormatoUsuario = {
    usuario: string,
    clave: string,
}

export type PacienteModel = {
    id: string,
    fecha: string,
    nombre: string,
    edad: number,
    sexo: Sexo,
    padecimiento: string,
    responsable: string,
    direccion: string,
    municipio: string,
    telefono: string,
    celular: string,
    correo: string,
    nivelSocioeconomico: NivelSocioeconomico,
    descripcionDelCaso: string,
    activo: boolean,
    fechaEgreso: string,
}

export type EquipoMedicoModel = {
    id: string,
    codigo: number,
    tipoDeEquipoMedico: TipoEquipoMedico,
    descripcion: string,
    caso: string,
    donador: string,
    factura: string,
    fechaDeCompra: string,
    casosAnteriores: string,
    activo: boolean,
    fechaDeBaja: string,
    razonDeBaja: string,
}