class regresa{

    constructor(nombre){
        this.nombre = nombre
    }
    presente(){
        console.log(`hola regreso a la ultima letra ${this.nombre[5]}`)
    }

}
const regreso= new regresa("FABIAN")
regreso.presente();