import {axiosInstance} from "./axiosService";
import {urls} from "../constans/urls";

const launchService = {
    getAll: axiosInstance(urls.launches.base),
    getById: (id) => `/${urls.launches.byId(id)}`
}

export {launchService};