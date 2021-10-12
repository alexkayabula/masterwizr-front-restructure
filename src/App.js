import React from 'react';
import './index.css';
import { store } from './store/store';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import routes from "./routes";
const App = () =>{
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
      <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={props => {
                  return (
                    <route.layout {...props}>
                      <route.component {...props} />
                    </route.layout>
                  );
                }}
              />
            );
          })}
        </Switch>
      </Router>
    </Provider>
    </div>
  );
}

export default App;
