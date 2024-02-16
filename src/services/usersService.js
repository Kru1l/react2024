import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const usersService = {
    getAll: () => apiService.get(urls.users.base),
    getById: (id) => apiService.get(urls.users.byId(id))
};

export {usersService};