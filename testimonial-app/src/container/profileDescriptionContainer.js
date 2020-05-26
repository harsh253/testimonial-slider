import React, {Component} from 'react';
import ProfileDescription from '../components/profileDescription';
import '../styles/App.css';

class ProfileDescriptionContainer extends Component{
    render(){
        return(
            <div className="description-container">
                <ProfileDescription profile={this.props.profile}></ProfileDescription>
            </div>
        )
    }
}

export default ProfileDescriptionContainer;