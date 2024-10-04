import Car from './10-car.js';

class EVCar extends Car {
    constructor(brand, motor, color, range) {
        super(brand); // Call the constructor of Car with brand
        this._motor = motor;
        this._color = color;
        this._range = range;
    }

    // Override the cloneCar method
    cloneCar() {
        // Instead of returning an EVCar, return a new Car instance
        return new Car(this._brand); // Assuming Car constructor accepts brand
    }
}
