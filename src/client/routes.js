import React from 'react';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import FourOhFourPage from './pages/FourOhFourPage';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export const routes = [
	{ path: "/", exact: true, component: HomePage },
	{ path: "/login", component: LoginPage },
	{ path: "/register", exact: true, component: RegisterPage },
//	{ path: "/feed", exact: true, component: FeedPage},
	
	//PLOP_INSERT_ROUTE
	{
		//This route must always be last, as it matches any route, but order matters
		path: "/",
		component: props => {
			//Provide proper 404 error messages
			if (props.staticContext) props.staticContext.status = "404";
			return <FourOhFourPage {...props} />;
		}
	}
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
export const RouteWithSubRoutes = route => (
	<Route
		path={route.path}
		render={props => (
			// pass the sub-routes down to keep nesting
			<route.component {...props} routes={route.routes} />
		)}
	/>
);
const map = routes =>
	routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />);
