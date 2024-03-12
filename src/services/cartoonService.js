import {apiService} from "./apiService";
import {urls} from "../constans";

const cartoonService = {
    episodes: {
        getAll: (page) => apiService.get(urls.episodes, {params: {page}})
    },
    characters: {
        getByIds: (ids) => apiService.get(urls.characters.byIds(ids))
    }
};

export {cartoonService};