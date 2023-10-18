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
    async getPanigation(pageNumber, pageSize){
        return pageNumber && pageSize 
        ? this.api.get(`/getpagination?pageNumber=${pageNumber}&pageSize=${pageSize}`) 
        : this.api.get(`/getpagination`)
    }
    async uptoStaff(id) {
        return (await this.api.get(`/uptostaff/${id}`)).data
    }
    async lockAccount(id) {
        return (await this.api.get(`/lockaccount/${id}`)).data
    }
    async getStaff() {
        return (await this.api.get('/getstaff')).data
    }
    async exportPdf(data) {
        return (await this.api.post('/exportpdf', data, { responseType: 'blob'}))
    }
    async confirmcodeCreate(data) {
        return (await this.api.post('/confirmcodecreate', data))
    }
}

export default new userService();