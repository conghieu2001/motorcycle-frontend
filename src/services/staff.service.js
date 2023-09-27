import createApiClient from "./config.service";

class staffService {
    constructor (baseUrl= "http://localhost:3000/staff"
    ){
        this.api = createApiClient(baseUrl)
    }
    async create(data) {
        return (await this.api.post('/create', data))
    }
    async getAll(pageNumber, pageSize){
        return pageNumber && pageSize 
        ? this.api.get(`/getall?pageNumber=${pageNumber}&pageSize=${pageSize}`) 
        : this.api.get(`/getall`)
    }
    async exportPdf(data) {
        return (await this.api.post('/exportpdf', data, { responseType: 'blob'}))
    }
    async exportPdfDetail(data) {
        return (await this.api.post('/exportpdfdetail', data, { responseType: 'blob'}))
    }
    async findById(id) {
        return (await this.api.post("/findbyid", id))
    }
    async update(data) {
        return (await this.api.post('/update', data))
    }
    
}

export default new staffService();