import {createBrowserRouter, Navigate} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import UsersPage from "../pages/UsersPage";
import {usersService} from "../services/usersService";
import UserDetailsPage from "../pages/UserDetailsPage";
import PostsPage from "../pages/PostsPage";
import {postsService} from "../services/postsService";
import PostDetailsPage from "../pages/PostDetailsPage";
import CommentsPage from "../pages/CommentsPage";
import {commentsService} from "../services/commentsService";

// Отримати всіх юзерів з json placeholder
// 2 Вивести id,name всіх юзерів
// 3 Додати кожному юзеру кнопку/посилання , при кліку на яку відбувається перехід на сторінку user-details,
// котра має детальну інфорацію про об'єкт на який клікнули
//
// На сторінці user-details:
// 4 Вивести детальну інформацію (5 і більше полів) про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// 6 Кожному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details,
// котра має детальну інфу про поточний пост.
//
//     На cторінці post-detail:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Під інформацією про пост, вивести всі коментарі поточного поста

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'users'}/>
            },
            {
                path: '/users', loader: () => usersService.getAll(), element: <UsersPage/>, children: [
                    {
                        path: ':id', element: <UserDetailsPage/>
                    }
                ]
            },
            {
                path: '/users/:id/posts',
                loader: ({params: {id}}) => postsService.getByUserId(id),
                element: <PostsPage/>
            },
            {
                path: '/posts/:id',
                loader: ({params: {id}}) => postsService.getById(id),
                element: <PostDetailsPage/>,
                children: [
                    {
                        path: '',
                        loader: ({params: {id}}) => commentsService.getByPostId(id),
                        element: <CommentsPage/>
                    }
                ]
            }
        ]
    }
]);

export {router};