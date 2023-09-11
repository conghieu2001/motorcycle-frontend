import createApiClient from "./config.service";

class acessService {
    constructor (baseUrl= "http://localhost:3000/accesstory"
    ){
        this.api = createApiClient(baseUrl)
    }

    async getAll() {
        return (await this.api.get('/getall')).data
    }
    async create(data) {
        const headers={
            'Content-Type': 'multipart/form-data'
        }
        const baseUrl= "http://localhost:3000/accesstory"
        this.api=createApiClient(baseUrl,headers)
        
        return (await this.api.post('/create', data))
    }
}

export default new acessService();