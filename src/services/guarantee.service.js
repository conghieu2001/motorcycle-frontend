import createApiClient from "./config.service";

class guaranteeService {
    constructor (baseUrl= "http://localhost:3000/guarantee"
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
    async exportPdf(data) {
        return (await this.api.post('/exportpdf', data, { responseType: 'blob'}))
    }
    async findByIdExportPdf(id) {
        return (await this.api.post('/findbyidexportpdf', id))
    }
}

export default new guaranteeService();