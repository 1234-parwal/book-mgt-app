import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Login from '../screens/Login';
import ListBook from '../components/ListBook'
import AddBook from '../components/AddBook'
import EditBook from '../components/EditBook'
import Home from '../screens/Home';
import Register from '../screens/Register';
import Confirmation from '../screens/Confirmation';
import { AuthContext } from '../context/auth';
import { getStore } from '../utils';
import BookProvider from '../context/BookContext';

function AuthenticatedRoute ({component: Component, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => getStore('user') ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

class Navigation extends Component {
  render() {
    return (
      <AuthContext.Provider>
        <BookProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/confirm" component={Confirmation} />
            <AuthenticatedRoute exact path='/home' component={Home} />
            <Route exact path='/listBook' component={ListBook} />
          <Route exact path='/add' component={AddBook} />
          <Route exact path='/edit/:id' component={EditBook} />
            <Route exact path='*' component={Login} />
          </Switch>
        </Router>
        </BookProvider>
      </AuthContext.Provider>
    )
  }
}

export default Navigation;
