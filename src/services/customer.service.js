import createApiClient from "./config.service";

class customerService {
    constructor (baseUrl= "http://localhost:3000/customer"
    ){
        this.api = createApiClient(baseUrl)
    }

    async getAll() {
        return (await this.api.get('/getall')).data
    }
    // async create(data) {
    //     return (await this.api.post('/create', data))
    // }
    async findById(id) {
        return (await this.api.post('/findbyid', id))
    }
}

export default new customerService();