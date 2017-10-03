import App from './app.js'
import Base from './components/Base'
import HomePage from './components/layout/Home';
// import DashboardPage from './components/layout/DashboardPage';
import LoginPage from './components/containers/Login';
//import SignUpPage from './components/containers/SignUp';
import Auth from './modules/Auth';


//deprecated
// const routes = {
//   // base component (wrapper for the whole application).
//   component: Base,
//   childRoutes: [
//
//     {
//       path: '/',
//       getComponent: (location, callback) => {
//         if (Auth.isUserAuthenticated()) {
//           callback(null, DashboardPage);
//         } else {
//           callback(null, HomePage);
//         }
//       }
//     },
//
//     {
//       path: '/login',
//       component: LoginPage
//     },
//
//     {
//       path: '/signup',
//       component: SignUpPage
//     },
//
//     {
//       path: '/logout',
//       onEnter: (nextState, replace) => {
//         Auth.deauthenticateUser();
//
//         // change the current URL to /
//         replace('/');
//       }
//     }
//   ]
// };

// export default routes;


// export default (
//   <Route path="/" component={App}>
//     <IndexRoute
//       getComponent={HomePage}
//     />
//     <Route
//       path="/signup"
//       getComponent={SignUpPage}
//     />
//   </Route>
// );
