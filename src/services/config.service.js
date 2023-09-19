import axios from "axios";

const createApiClient = (baseURL, headers) =>{
    // console.log(headers)
    const commonConfig = {
        withCredentials: true,
        headers:headers ? headers : {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    };
    // console.log({headers})
    return axios.create({
        baseURL,
        ...commonConfig,
    });
}
export default createApiClient