import createApiClient from "./config.service";

class recruitmentService {
    constructor (baseUrl= "http://localhost:3000/recruitment"
    ){
        this.api = createApiClient(baseUrl)
    }

    async getAll(pageNumber, pageSize){
        return pageNumber && pageSize 
        ? this.api.get(`/getall?pageNumber=${pageNumber}&pageSize=${pageSize}`) 
        : this.api.get(`/getall`)
    }
    async update(data) {
        return (await this.api.post('/update', data))
    }
    async create(data) {   
        return (await this.api.post('/create', data))
    }
    async findById(id) {
        return (await this.api.post('/findbyid', id))
    }
    async delete(id) {
        return (await this.api.post('/delete', id))
    }
    async exportPdf(data) {
        return (await this.api.post('/exportpdf', data, { responseType: 'blob'}))
    }
    async findByDay(data) {
        return (await this.api.post('/findbyday', data))
    }
}

export default new recruitmentService();