const baseURL = 'https://rickandmortyapi.com/api';

const characters = '/character';

const urls = {
    characters: {
        base: characters,
        byId: (id) => `${characters}/${id}`
    }
};

export {
    baseURL,
    urls
};