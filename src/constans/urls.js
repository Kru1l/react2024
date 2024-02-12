const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';
const comments = '/comments';


const urls = {
    users: {
        base: users,
        byId: (id) => `${users}/${id}`
    },
    comments: {
        base: comments,
        byId: (id) => `${comments}/${id}`
    }
}

export {
    baseURL,
    urls
}