class Singleton {
    private static instance: Singleton

    private constructor() { }

    public static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton()//se crea la única instancia compartida a nivel de aplicación
        }
        return Singleton.instance
    }

    public mostrarPorConsola() {
        console.log("Método del Singleton");
    }
}