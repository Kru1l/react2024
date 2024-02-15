const baseURL = 'https://jsonplaceholder.typicode.com';

const todos = '/todos';
const albums = '/albums';
const comments = '/comments';
const posts = '/posts';

const urls = {
    todos: {
        base: todos,
        byId: (id) => `${todos}/${id}`
    },
    albums: {
        base: albums,
        byId: (id) => `${albums}/${id}`
    },
    comments: {
        base: comments,
        byId: (id) => `${comments}/${id}`
    },
    posts: {
        base: posts,
        byId: (id) => `${posts}/${id}`
    }
}

export {
    baseURL,
    urls
};