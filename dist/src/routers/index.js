"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const carController_1 = __importDefault(require("../controllers/carController"));
let carRouter = express_1.default.Router();
carRouter.get('/cars/', carController_1.default.findAll);
carRouter.get('/cars/brand/:id', carController_1.default.findAllByBrand);
carRouter.get('/cars/:id', carController_1.default.findOne);
carRouter.get('/price', carController_1.default.sortByPrice);
carRouter.post('/cars', carController_1.default.createNewCar);
carRouter.post('/cars/:id', carController_1.default.updateCar);
carRouter.delete('/cars/:id', carController_1.default.deleteCar);
exports.default = carRouter;
//# sourceMappingURL=index.js.map