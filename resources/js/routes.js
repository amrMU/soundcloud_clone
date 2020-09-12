// import Home from './Components/Home';
const Home = () =>
    import ('./Components/Home');
// import NotFound from './Components/Errors/NotFound';
const NotFound = () =>
    import ('./Components/Errors/NotFound');
const Signup = () =>
    import ('./Components/Auth/Signup');
// import Signup from './Components/Auth/Signup';

//183 B 226 ms  1.3 kB	4 ms						

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