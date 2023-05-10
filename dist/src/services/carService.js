"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = require("../entity/car");
const data_source_1 = __importDefault(require("../data-source"));
class CarService {
    constructor() {
        this.carRepository = data_source_1.default.getRepository(car_1.Car);
    }
    async getAll() {
        return await this.carRepository.find();
    }
    async getByBrand(id) {
        return await this.carRepository.find({
            relations: { brand: true },
            where: {
                brand: { id: id }
            }
        });
    }
    async createCar(Car) {
        await this.carRepository.save(Car);
    }
    async updateCar(id, newCar) {
        await this.carRepository.update({ id: id }, newCar);
    }
    async findOne(id) {
        const car = await this.carRepository.findOne({
            relations: ["brand"],
            where: { id: id },
        });
        return car;
    }
    async removeOne(id) {
        await this.carRepository.delete(id);
    }
    async sortByPrice() {
        return await this.carRepository.find({
            order: {
                price: 'ASC'
            }
        });
    }
}
exports.default = new CarService();
//# sourceMappingURL=carService.js.map