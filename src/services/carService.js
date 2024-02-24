import {apiService} from "./apiService";
import {urls} from "../constans";

const carService = {
    getAll: (page = '1') => apiService.get(urls.cars.base, {params: {page}}),
    getById: (id) => apiService.get(urls.cars.byId(id)),
    create: (data) => apiService.post(urls.cars.base, data),
    updateById: (id, data) => apiService.put(urls.cars.byId(id), data),
    deleteById: (id) => apiService.delete(urls.cars.byId(id))
}

export {carService};