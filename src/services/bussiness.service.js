/* eslint-disable no-unused-vars */

import createApiClient from "./config.service";

class bussinessService {
    constructor (baseUrl= "http://localhost:3000/bussiness"
    ){
        this.api = createApiClient(baseUrl)
    }

    async getAll() {
        return (await this.api.get('/getall')).data
    }
    async update(data) {
        const headers={
            'Content-Type': 'multipart/form-data'
        }
        const baseUrl= "http://localhost:3000/bussiness"
        this.api=createApiClient(baseUrl,headers)
        
        return (await this.api.post('/update', data))
    }
}

export default new bussinessService();