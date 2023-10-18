import createApiClient from "./config.service";

class orderService {
    constructor (baseUrl= "http://localhost:3000/orderrepair"
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
    async findByTotalBill(data) {
        return (await this.api.post('/findbytotalbill', data))
    }
    async update(data) {
        return (await this.api.post('/update', data))
    }
    async cancel(data) {
        return (await this.api.post('/cancelorder', data))
    }
    async getsales(data) {
        return (await this.api.post('/getsales', data))
    } 
}

export default new orderService();