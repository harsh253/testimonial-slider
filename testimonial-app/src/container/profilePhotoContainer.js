import React, {Component} from 'react';
import ProfilePhoto from '../components/profilePhoto';

class ProfilePhotoContainer extends Component{
    render(){
        return(
            <div className="photo-container">
                <ProfilePhoto profile={this.props.profile} slideRightFunc={this.props.slideRightFunc} slideLeftFunc = {this.props.slideLeftFunc}></ProfilePhoto>
            </div>
        )
    }
}

export default ProfilePhotoContainer;