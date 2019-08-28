import CarController from "./Controllers/CarController.js";
import JobController from "./Controllers/JobController.js";
import HouseController from "./Controllers/HouseController.js";


class App {
    constructor() {
        this.controllers = {
            carCtrl: new CarController(),
            jobCtrl: new JobController(),
            houseCtrl: new HouseController(),
        }
    }
}

window['app'] = new App()