import axios from "../axios";

export default {
    query: (params: any) => {
        return axios({
            method: "GET",
            url: "",
            params
        })
    }
}