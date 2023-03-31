import { ITarea, Nivel } from "./interfaces/iTarea";

export class Programar implements ITarea {
    titulo;
    descripcion?;
    completada;
    urgencia?;

    constructor(titulo: string, descripcion: string, completada: boolean, urgencia: Nivel) {
        this.titulo = titulo
        this.descripcion = descripcion
        this.completada = completada
        this.urgencia = urgencia
    }

    resumen = () => {
        return `Tarea de Programación: ${this.titulo} - ${this.completada}`
    }
}