/* eslint-disable no-unused-vars */

import createApiClient from "./config.service";

class userService {
    constructor (baseUrl= "http://localhost:3000/user"
    ){
        this.api = createApiClient(baseUrl)
    }
    async register(data) {
        return await this.api.post('/register', data);
    }
    async getAll() {
        return (await this.api.get('/getall')).data
    }
    async login(data) {
        return await this.api.post('login', data)
    }
    async logout(){
        return await this.api.get('/logout')
    }
    async getUser() {
        return await this.api.get('/getuser')
    }
    async forget(data) {
        return (await this.api.post('/forget', data))
    }
    async confirmcode(data) {
        return (await this.api.post('/confirmcode', data))
    }
    async reset(data) {
        return (await this.api.post('/resetpass', data))
    }
    async changePass(data) {
        return (await this.api.post('/changepass', data))
    }
    async update(data) {
        const headers={
            'Content-Type': 'multipart/form-data'
        }
        const baseUrl= "http://localhost:3000/user"
        this.api=createApiClient(baseUrl,headers)
        
        return (await this.api.post('/update', data))
    }
    async updateavatar(data) {
        return (await this.api.post('/updateavatar', data))
    }
    async getUserById (id) {
        return (await this.api.get(`/getuserbyid/?id=${id}`))
    }
}

export default new userService();