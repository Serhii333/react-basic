import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {routerActions} from 'react-router-redux';
import {Root, Editor,Gallery, StartPage} from '../pages';
import NavBar from '../components/NavBar/NavBar';
//import {App} from '../pages'
//import {UserAuthWrapper} from 'redux-auth-wrapper'

// //Redirects to /login by default
// const UserIsAuthenticated = UserAuthWrapper({
//     authSelector: state => state.user, // how to get the user state
//     failureRedirectPath: '/login',
//     predicate: user=>user.sessionUid,
//     redirectAction: routerActions.replace, // the redux action to dispatch for redirect
//     wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
// })
// UserIsAuthenticated.onEnter = (store, nextState, replace) => {
//     const user = store.getState().user;
//
//     if (!user.sessionUid) {
//         replace({
//             pathname: '/login',
//             state: {redirect: nextState.location.pathname},
//         });
//     }
// };
export default(

    <div>
        <Route name="Root" path='/' component={Root}>
             <Route name="Editor" path='editor'  component={Editor} />
            <Route name="Gallery"  path='gallery'  component={Gallery} />
            <IndexRoute name="StartPage"   component={StartPage}/>
        </Route>
    </div>
);
// <Route name="history" path='history' component={UserIsAuthenticated(History)}/>
// <Route name="auth" path="login" component={Auth}/>
//     <IndexRoute name="dashboard" component={UserIsAuthenticated(Dashboard)}/>

//
