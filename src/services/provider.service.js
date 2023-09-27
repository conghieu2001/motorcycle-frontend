import createApiClient from "./config.service";

class providerService {
    constructor (baseUrl= "http://localhost:3000/provider"
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

export default new providerService();