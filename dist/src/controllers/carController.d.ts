import { Request, Response } from 'express';
declare class CarController {
    constructor();
    findAll(request: Request, res: Response): Promise<void>;
    findAllByBrand(req: Request, res: Response): Promise<void>;
    findOne(req: Request, res: Response): Promise<void>;
    createNewCar(req: Request, res: Response): Promise<void>;
    updateCar(req: Request, res: Response): Promise<void>;
    deleteCar(req: Request, res: Response): Promise<void>;
    sortByPrice(req: Request, res: Response): Promise<void>;
}
declare const _default: CarController;
export default _default;
