import Home from './Components/Home';
import NotFound from './Components/Errors/NotFound';

export default {
    mode: 'history',
    routes: [{
            path: '*',
            component: NotFound
        },
        {
            path: '/',
            component: Home
        }
    ],
}