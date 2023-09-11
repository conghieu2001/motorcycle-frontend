import createApiClient from "./config.service";

class categoryService {
    constructor (baseUrl= "http://localhost:3000/category"
    ){
        this.api = createApiClient(baseUrl)
    }

    async getAll() {
        return (await this.api.get('/getall')).data
    }
    async create(data) {
        return (await this.api.post('/create', data))
    }
    async findByName(data) {
        return (await this.api.post('/findbyname', data))
    }
}

export default new categoryService();