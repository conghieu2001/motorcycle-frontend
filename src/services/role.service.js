import createApiClient from "./config.service";

class roleService {
    constructor (baseUrl= "http://localhost:3000/role"
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
    async updateRole(data) {
        return (await this.api.post('/update', data))
    }
    async updateRoleUser(data) {
        return (await this.api.post('/updateroleuser', data))
    }
    async removeUpdateRoleUser(data) {
        return (await this.api.post('/removeupdateroleuser', data))
    }
}

export default new roleService();