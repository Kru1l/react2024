import {apiService} from "./apiService";
import {urls} from "../constans";

const characterService = {
    getAll: (page) => apiService.get(urls.characters.base, {params: {page}}),
    getById: (id) => apiService.get(urls.characters.byId(id))
};

export {
    characterService
};