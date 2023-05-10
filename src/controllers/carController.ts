import carService from "../services/carService";
import { Request, Response } from 'express';


class CarController{
    constructor(){}
    async findAll(request: Request,res:Response){
        let all = await carService.getAll()
        res.status(200).json(all);
    }
    async findAllByBrand(req:Request, res:Response){
        let all = await carService.getByBrand(req.params.id);
        res.status(200).json(all);
    }
    async findOne(req:Request, res:Response){
        let car = await carService.findOne(req.params.id);
        res.status(200).json(car);
    }
    async createNewCar(req:Request, res:Response){
        await carService.createCar(req.body)
        res.status(201).json({message:"create new car successfully"})
    }
    async updateCar(req:Request, res:Response){
        await carService.updateCar(req.params.id, req.body)
        res.status(201).json({message:"update car success !"})
    }
    async deleteCar(req:Request, res:Response){
        await carService.removeOne(req.params.id)
        res.status(201).json({message:"delete car success !"})
    }
    async sortByPrice(req:Request, res:Response){
        let carList= await carService.sortByPrice()
        res.status(200).json(carList)
    }
}

export default new CarController();