import React, { Component } from 'react';
import { routes, RouteWithSubRoutes } from './client/routes'
import { Switch, BrowserRouter } from "react-router-dom";
import Main from './client/pages/Main';
import './App.css';

class App extends React.Component {
  
	render() {
		return (
      <BrowserRouter>
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
          </Switch>
      </BrowserRouter>
					
		);
	}
}

export default App