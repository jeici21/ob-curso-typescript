export class Persona {
    nombre
    apellido
    edad
    constructor(nombre: string, apellido: string, edad: number) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }
}

export class Trabajador extends Persona {
    sueldo
    constructor(nombre: string, apellido: string, edad: number, sueldo: number) {
        super(nombre, apellido, edad)
        this.sueldo = sueldo
    }

    saludar() {
        super.saludar()
        console.log(`Mi sueldo es de ${this.sueldo}$`);
    }
}

export class Jefe extends Persona {
    trabajadores: Trabajador[] = []
    constructor(nombre: string, apellido: string, edad: number) {
        super(nombre, apellido, edad)
    }
}