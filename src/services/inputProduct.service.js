import createApiClient from "./config.service";

class inputProductService {
    constructor (baseUrl= "http://localhost:3000/inputproduct"
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
        const baseUrl= "http://localhost:3000/inputproduct"
        this.api=createApiClient(baseUrl,headers)
        return (await this.api.post('/create', data))
    }
    async findById(id) {
        const headers={
            "Content-Type": "application/json",
            Accept: "application/json",
        }
        const baseUrl= "http://localhost:3000/inputproduct"
        this.api=createApiClient(baseUrl,headers)
        return (await this.api.post('/findbyid', id))
    }
    async exportExcel() {
        return (await this.api.get('/exportExcel'))
    }
    async exportPdf(data) {
        return (await this.api.post('/exportpdf', data, { responseType: 'blob'}))
    }
    async findByIdExportPdf(id) {
        const headers={
            "Content-Type": "application/json",
            Accept: "application/json",
        }
        const baseUrl= "http://localhost:3000/inputproduct"
        this.api=createApiClient(baseUrl,headers)
        return (await this.api.post('/findbyidexportpdf', id))
    }
    async findByNumberTHD(data) {
        return (await this.api.post('/findbythd', data))
    }
    async findByDate(data) {
        return (await this.api.post('/findbydate', data))
    }
}

export default new inputProductService();