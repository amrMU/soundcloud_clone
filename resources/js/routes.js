import Home from './Components/Home';
import NotFound from './Components/Errors/NotFound';
import Signup from './Components/Auth/Signup';

export default {
    mode: 'history',
    routes: [{
            path: '*',
            component: NotFound
        },
        {
            path: '/',
            component: Home
        },
        {
            path: '/signup',
            component: Signup
        },
    ],
}