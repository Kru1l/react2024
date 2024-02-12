import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const userService = {
    getAll: () => apiService.get(urls.users.base),
    getById: (id) => apiService.get(urls.users.byId(id)),
    create: (data) => apiService.post(urls.users.base, data)
}

export {userService};