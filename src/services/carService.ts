import { Car } from '../entity/car';
import AppDataSource from "../data-source";

class CarService {
    private carRepository;
    constructor(){
        this.carRepository = AppDataSource.getRepository(Car);
    }
    async getAll(){
        return await this.carRepository.find()
    }
    async getByBrand(id){
        return await this.carRepository.find({
            relations:{brand:true},
            where:{
                brand:{id:id}
            }
        });
    }
    async createCar(Car){
        await this.carRepository.save(Car);
    }
    async updateCar(id,newCar){
        await this.carRepository.update({id:id},newCar )
    }
    async findOne(id){
        const car = await this.carRepository.findOne({
          relations: ["brand"],
          where: { id: id },
        });
        return car;
    }
    async removeOne(id){
        await this.carRepository.delete(id)
    }

    async sortByPrice(){
        return await this.carRepository.find({
            order: {
                price: 'ASC'
              }
        })
    }
}

export default new CarService();