declare class CarService {
    private carRepository;
    constructor();
    getAll(): Promise<any>;
    getByBrand(id: any): Promise<any>;
    createCar(Car: any): Promise<void>;
    updateCar(id: any, newCar: any): Promise<void>;
    findOne(id: any): Promise<any>;
    removeOne(id: any): Promise<void>;
    sortByPrice(): Promise<any>;
}
declare const _default: CarService;
export default _default;
