import createApiClient from "./config.service";

class postService {
    constructor (baseUrl= "http://localhost:3000/post"
    ){
        this.api = createApiClient(baseUrl)
    }

    async getAll(pageNumber, pageSize){
        return pageNumber && pageSize 
        ? this.api.get(`/getall?pageNumber=${pageNumber}&pageSize=${pageSize}`) 
        : this.api.get(`/getall`)
    }
    async update(data) {
        const headers={
            'Content-Type': 'multipart/form-data'
        }
        const baseUrl= "http://localhost:3000/post"
        this.api=createApiClient(baseUrl,headers)
        
        return (await this.api.post('/update', data))
    }
    async create(data) {
        const headers={
            'Content-Type': 'multipart/form-data'
        }
        const baseUrl= "http://localhost:3000/post"
        this.api=createApiClient(baseUrl,headers)
        
        return (await this.api.post('/create', data))
    }
    async findById(id) {
        const headers={
            "Content-Type": "application/json",
            Accept: "application/json",
        }
        const baseUrl= "http://localhost:3000/post"
        this.api=createApiClient(baseUrl,headers)
        return (await this.api.post('/findbyid', id))
    }
    async delete(id) {
        const headers={
            "Content-Type": "application/json",
            Accept: "application/json",
        }
        const baseUrl= "http://localhost:3000/post"
        this.api=createApiClient(baseUrl,headers)
        return (await this.api.post('/delete', id))
    }
    async exportPdf(data) {
        return (await this.api.post('/exportpdf', data, { responseType: 'blob'}))
    }
    async findByDay(data) {
        return (await this.api.post('/findbyday', data))
    }
}

export default new postService();