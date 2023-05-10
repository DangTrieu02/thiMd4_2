import express from 'express';
import carController from '../controllers/carController';
let carRouter = express.Router();

carRouter.get('/cars/',carController.findAll)
carRouter.get('/cars/brand/:id',carController.findAllByBrand)
carRouter.get('/cars/:id',carController.findOne)
carRouter.get('/price',carController.sortByPrice)
carRouter.post('/cars',carController.createNewCar)
carRouter.post('/cars/:id',carController.updateCar)
carRouter.delete('/cars/:id',carController.deleteCar)

export default carRouter;
