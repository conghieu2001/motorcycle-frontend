import createApiClient from "./config.service";

class departmentService {
    constructor (baseUrl= "http://localhost:3000/department"
    ){
        this.api = createApiClient(baseUrl)
    }

    async getAll() {
        return (await this.api.get('/getall')).data
    }

    async create(data) {
        return (await this.api.post('/create', data))
    }

}

export default new departmentService();