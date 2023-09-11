/* eslint-disable no-unused-vars */

import createApiClient from "./config.service";

class userService {
    constructor (baseUrl= "http://localhost:3000/user",
    headers ={
        'Content-Type': 'multipart/form-data'
    }
    ){
        this.api = createApiClient(baseUrl, headers)
    }
    async update(data) {
        return (await this.api.post('/update', data))
    }
}

export default new userService();