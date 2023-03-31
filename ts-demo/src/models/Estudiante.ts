import { Curso } from './Curso';

export class Estudiante {
    //Propiedades de clase
    nombre
    apellidos?
    cursos
    private ID = '123124'
    //Constructor
    constructor(nombre: string, cursos: Curso[], apellidos?: string) {
        //Inicializamos las propiedades
        this.nombre = nombre;
        this.cursos = cursos
        if (apellidos) this.apellidos = apellidos
    }

    get horasEstudiadas() {
        let horasEstudiadas = 0
        this.cursos.forEach((curso) => {
            horasEstudiadas += curso.horas;
        })
        return horasEstudiadas
    }

    set ID_Estudiante(id: string) {
        this.ID = id
    }
}