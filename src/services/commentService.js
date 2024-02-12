import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const commentService = {
    getAll: () => apiService.get(urls.comments.base),
    getById: (id) => apiService.get(urls.comments.byId(id)),
    create: (data) => apiService.post(urls.comments.base, data)
}

export {commentService};