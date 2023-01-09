class Ninja{
    constructor(nombre){
        this.nombre = nombre;
        this.salud = 0;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    
    sayName(){
        return this.nombre;
    }
    drinkSake(){
        return this.salud += 10;
    }
    showStats(){
        console.log(`Nombre: ${this.sayName()} Salud: ${this.drinkSake()} Fuerza: ${this.fuerza} Velocidad: ${this.velocidad}`)
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

class Sensei extends Ninja{
    constructor(nombre){
        super(nombre);
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria =10;
    }
    speakWisdom(){
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }

}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();