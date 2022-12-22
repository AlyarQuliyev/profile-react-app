import React, { Component } from "react";
import Address from "./Address";
import Email from "./Email";
import Name from "./Name";
import PersonalInfo from "./PersonalInfo";
import ProfilePhoto from "./ProfilePhoto";

class Profile extends Component {
  render() {
    const { name, address, email, info, photo } = this.props.user;
    return (
      <div className="card">
        <ProfilePhoto url={photo} name={name} />
        <Name name={name} />
        <Address address={address} />
        <PersonalInfo info={info} />
        <Email mail={email} />
      </div>
    );
  }
}
export default Profile;
