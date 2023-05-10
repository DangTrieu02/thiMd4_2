"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const carService_1 = __importDefault(require("../services/carService"));
class CarController {
    constructor() { }
    async findAll(request, res) {
        let all = await carService_1.default.getAll();
        res.status(200).json(all);
    }
    async findAllByBrand(req, res) {
        let all = await carService_1.default.getByBrand(req.params.id);
        res.status(200).json(all);
    }
    async findOne(req, res) {
        let car = await carService_1.default.findOne(req.params.id);
        res.status(200).json(car);
    }
    async createNewCar(req, res) {
        await carService_1.default.createCar(req.body);
        res.status(201).json({ message: "create new car successfully" });
    }
    async updateCar(req, res) {
        await carService_1.default.updateCar(req.params.id, req.body);
        res.status(201).json({ message: "update car success !" });
    }
    async deleteCar(req, res) {
        await carService_1.default.removeOne(req.params.id);
        res.status(201).json({ message: "delete car success !" });
    }
    async sortByPrice(req, res) {
        let carList = await carService_1.default.sortByPrice();
        res.status(200).json(carList);
    }
}
exports.default = new CarController();
//# sourceMappingURL=carController.js.map