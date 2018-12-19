let teslaX = {};
teslaX.model = 'X';
teslaX.make = 'Tesla';
teslaX.price = 100000;
teslaX.beep = beep;
teslaX.beep();
console.log(teslaX);

let corvette = {
    model: 'Corvette',
    make: 'Chevrolet',
    price: 50000,
    beep: beep
}

corvette.beep();
console.log(corvette);

function beep() {
    console.log(this.make + ' ' + this.model 
      + ' Beep Beep');
}

function Car(model, make, price) { // this = {}
    [this.make, this.model, this.price] = [make, model, price];
    return this;
}
Car.prototype.beep = beep;

let toyotaCorolla = new Car('Corolla', 'Toyota', 20000);
toyotaCorolla.beep();
console.log(toyotaCorolla);

class SuperCar {
    constructor (model, make, price) { 
        [this.make, this.model, this.price] = [make, model, price];
    }
    beep() {
        console.log(this.make + ' ' + this.model  + ' Beep Beep');
    }
}

let ferrariF430 = new SuperCar('F430', 'Ferrari', 500000);
ferrariF430.beep();
console.log(ferrariF430);

let laferrari = Object.create(ferrariF430);
laferrari.model = 'La Ferrari';
laferrari.beep();
console.log(laferrari);


const carStr = `{
    "model": "Corvette",
    "make": "Chevrolet",
    "price": 50000
}`;


var newCar = JSON.parse(carStr);
console.log(newCar);

console.log(newCar);


