import React, { Component } from 'react'

class ProfilePhoto extends Component {
  render() {
    const { url, name } = this.props;
    return (
        <div>
        <img className="profile-photo" src={url} alt={name} />
      </div>
    )
  }
}
export default ProfilePhoto;