import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const postsService = {
    getAll: () => apiService.get(urls.posts.base),
    getById: (id) => apiService.get(urls.posts.byId(id)),
    getByUserId: (id) => apiService.get(urls.posts.byUserId(id))
};

export {postsService};