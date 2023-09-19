import createApiClient from "./config.service";

class brandService {
    constructor (baseUrl= "http://localhost:3000/brand"
    ){
        this.api = createApiClient(baseUrl)
    }

    async getAll() {
        return (await this.api.get('/getall')).data
    }
    async update(data) {
        const headers={
            'Content-Type': 'multipart/form-data'
        }
        const baseUrl= "http://localhost:3000/brand"
        this.api=createApiClient(baseUrl,headers)
        
        return (await this.api.post('/update', data))
    }
    async create(data) {
        const headers={
            'Content-Type': 'multipart/form-data'
        }
        const baseUrl= "http://localhost:3000/brand"
        this.api=createApiClient(baseUrl,headers)
        
        return (await this.api.post('/create', data))
    }
    async findById(id) {
        const headers={
            "Content-Type": "application/json",
            Accept: "application/json",
        }
        const baseUrl= "http://localhost:3000/brand"
        this.api=createApiClient(baseUrl,headers)
        return (await this.api.post('/findbyid', id))
    }
}

export default new brandService();