import createApiClient from "./config.service";

class acessService {
    constructor (baseUrl= "http://localhost:3000/accesstory"
    ){
        this.api = createApiClient(baseUrl)
    }

    async getAll(pageNumber, pageSize){
        return pageNumber && pageSize 
        ? this.api.get(`/getall?pageNumber=${pageNumber}&pageSize=${pageSize}`) 
        : this.api.get(`/getall`)
    }
    async create(data) {
        const headers={
            'Content-Type': 'multipart/form-data'
        }
        const baseUrl= "http://localhost:3000/accesstory"
        this.api=createApiClient(baseUrl,headers)
        
        return (await this.api.post('/create', data))
    }
    async exportPdf(data) {
        return (await this.api.post('/exportpdf', data, { responseType: 'blob'}))
    }
    async findById(id) {
        const headers={
            "Content-Type": "application/json",
            Accept: "application/json",
        }
        const baseUrl= "http://localhost:3000/accesstory"
        this.api=createApiClient(baseUrl,headers)
        return (await this.api.post('/findbyid', id))
    }
    async findByIdUpdate(id) {
        const headers={
            "Content-Type": "application/json",
            Accept: "application/json",
        }
        const baseUrl= "http://localhost:3000/accesstory"
        this.api=createApiClient(baseUrl,headers)
        return (await this.api.post('/findbyidupdate', id))
    }
    async update(data) {
        const headers={
            'Content-Type': 'multipart/form-data'
        }
        const baseUrl= "http://localhost:3000/accesstory"
        this.api=createApiClient(baseUrl,headers)
        
        return (await this.api.post('/update', data))
    }
}

export default new acessService();