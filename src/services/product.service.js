import createApiClient from "./config.service";

class productService {
    constructor (baseUrl= "http://localhost:3000/product"
    ){
        this.api = createApiClient(baseUrl)
    }

    async getAll() {
        return (await this.api.get('/getall')).data
    }
    async findById(id) {
        return (await this.api.post("/findbyid", id))
    }
    async create(data) {
        const headers={
            'Content-Type': 'multipart/form-data'
        }
        const baseUrl= "http://localhost:3000/product"
        this.api=createApiClient(baseUrl,headers)
        
        return (await this.api.post('/create', data))
    }
    async update(data) {
        const headers={
            'Content-Type': 'multipart/form-data'
        }
        const baseUrl= "http://localhost:3000/product"
        this.api=createApiClient(baseUrl,headers)
        
        return (await this.api.post('/update', data))
    }
    async getPanigation(pageNumber, pageSize){
        return pageNumber && pageSize 
        ? this.api.get(`/getpagination?pageNumber=${pageNumber}&pageSize=${pageSize}`) 
        : this.api.get(`/getpagination`)
    }
    async getByCategoryId(caId) {
        return (await this.api.post('/findbycategoryid', caId))
    }
    async getById(id) {
        return (await this.api.get(`/getbyid/${id}`)).data
    }
    async getByName() {
        return (await this.api.get(`/getbyname`)).data
    }
}

export default new productService();