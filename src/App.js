import React from 'react';
import { connect } from 'react-redux';
import { Footer } from './components';
import Navigation from './navigation';
import { getStore } from './utils';
import { ActionCreators } from './actions/profile';
import './styles';
import BookProvider from './context/BookContext';

class App extends React.Component {
  componentDidMount() {
    const user = getStore('user')
    if (user) {
      this.props.dispatch(ActionCreators.login(user));
    }
  }

  //remaining routing is inside Navigation component
  render() {
    return (
      <div>
        <BookProvider>
        <Navigation />
        <Footer />
        </BookProvider>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile
  }
}

export default connect(mapStateToProps)(App);
