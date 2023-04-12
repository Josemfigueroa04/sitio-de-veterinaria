class Animal {
    constructor(nombre,peso,edad) {
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }

    informacion() {
        return`${this.nombre}-${this.peso} kg.- ${this.edad} años`
    }

}

class Perro extends Animal {
    constructor(nombre,peso,edad,raza) {
        super(nombre,peso,edad);
        this.raza = raza;
    }

    informacion() {
        return`${this.nombre}-${this.peso} kg.- ${this.edad} años - ${this.raza}`
    }
}

class Gato extends Animal {
    constructor(nombre,peso,edad,sexo){
        super(nombre,peso,edad);
        this.sexo = sexo;
    }
    informacion() {
        return`${this.nombre}-${this.peso} kg.- ${this.edad} años - ${this.sexo}`
    }
}

class Conejo extends Animal {
    constructor(nombre,peso,edad,color){
        super(nombre,peso,edad);
        this.color = color;
    }
    informacion() {
        return`${this.nombre}-${this.peso} kg.- ${this.edad} años - ${this.color}`
    }
}

let perro1 = new Perro('Firulais', 10, 5, 'Pastor Aleman');
let gato1 = new Gato('Garfield', 5, 3, 'Macho');
let conejo1 = new Conejo('Bugs Bunny', 3, 2, 'Blanco');
let animales = [perro1, gato1, conejo1];

function mostrarInformacionAnimales(){
    let lista = document.getElementById('listarAnimales');
    for(let animal of animales){
        let li = document.createElement('li');
        li.textContent = animal.informacion();
        lista.appendChild(li);
    }
}