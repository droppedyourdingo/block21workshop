class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getDescription() {
        return `This car is a ${this.year} ${this.make} ${this.model}`
    }

}

class ElectricCar extends Car {
    constructor(make, model, year, range) {
        super(make, model, year,);
        this.range = range;
    }
    getDescription() {
        return `${super.getDescription()} and has a range of ${this.range} miles.`;
    }
}

const tesla = new ElectricCar("Tesla", "Model S", "2019", "300")

console.log(tesla)
console.log(tesla.getDescription())