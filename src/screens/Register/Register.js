import React, { Component } from 'react';
import { Divider, ProfileImage } from '../../components';
import RightContent from './components/RightContent';

export class Register extends Component {
  //rightContent component is form for registeration. I have added few extra features to it.
  //Profile image is for adding user profile to the registeration form.
  //hence this complete component is for rendering the registeration form.

  render() {
    return (
      <div className="row">
        <ProfileImage />
        <Divider />
        <RightContent />
      </div>
    )
  }
}

export default Register;
