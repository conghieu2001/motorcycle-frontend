import createApiClient from "./config.service";

class acessService {
    constructor (baseUrl= "http://localhost:3000/cart"
    ){
        this.api = createApiClient(baseUrl)
    }

    async getAll(pageNumber, pageSize){
        return pageNumber && pageSize 
        ? this.api.get(`/getall?pageNumber=${pageNumber}&pageSize=${pageSize}`) 
        : this.api.get(`/getall`)
    }
    async create(data) {   
        return (await this.api.post('/create', data))
    }
    async findById(id) {
        return (await this.api.post('/findbyid', id))
    }
    async update(data) {
        return (await this.api.post('/update', data))
    }
}

export default new acessService();