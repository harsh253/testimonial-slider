import React, {Component} from 'react';
import '../styles/App.css';

class ProfileDescription extends Component{

    constructor(props){
        super(props);
        this.state = {
            description: this.props.profile.description,
            name: this.props.profile.name,
            profile: this.props.profile.profile
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ 
            description: nextProps.profile.description,
            name: nextProps.profile.name,
            profile: nextProps.profile.profile 
        });  
    }


    render(){
        return(
            <div className="description">
                <div className="long-description">
                    <p>{this.state.description} 
                    </p>
                </div>
                <div className="profile-info-container">
                    <div className="profile-info name">
                        <h5>{this.state.name}</h5>
                    </div>
                    <div className="profile-info profile">
                        <h5>{this.state.profile}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileDescription;