import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Address from './components/address'
import Submit from './components/submit'
import Confirm from './components/confirm'
import Get from './components/getconfirm'

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
const routes = [
  {
    path: "/address",
    component: address
  },
  {
    path: "/submit",
    component: submit

  },
  {
  	path: "/confirm",
  	component: confirm
  },
  {
  	path: "/get",
  	component: get
  }

];

export default function RouteConfigExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/address"><strong>Address</strong></Link>
          </li>
          <li>
            <Link to="/submit"><strong>Submit</strong></Link>
          </li>
          <li>
          	<Link to="/confirm"><strong>Confirm</strong></Link>
          </li>
           <li>
          	<Link to="/get"><strong>Get Confirm</strong></Link>
          </li>
        </ul>

        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function address() {
  return <Address />
}


function submit() {
  return <Submit />
}

function confirm(){
	return <Confirm />
}

function get(){
	return <Get />
}


