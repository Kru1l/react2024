import {apiService} from "./apiService";
import {urls} from "../constans";

const rickAndMortyService = {
    episode: {
        getAll: (page = '1') => apiService.get(urls.episode, {params: {page}})
    },
    characters: {
        getByIds: (ids) => apiService.get(urls.character.byIds(ids))
    }
};

export {rickAndMortyService};