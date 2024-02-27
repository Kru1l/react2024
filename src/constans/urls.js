const baseURL = 'https://rickandmortyapi.com/api';

const character = '/character';
const episode = '/episode';

const urls = {
    episode,
    character: {
        byIds: (ids) => `${character}/${ids}`
    }
};

export {
    baseURL,
    urls
};