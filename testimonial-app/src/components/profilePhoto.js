import React, {Component} from 'react';
import bg from '../images/pattern-bg.svg';
import btnLeft from '../images/icon-prev.svg';
import btnRight from '../images/icon-next.svg';

class ProfilePhoto extends Component{
    constructor(props){
        super(props);
        this.state = {
            imgSrc : this.props.profile.imgSrc,
            
        }
    }
    

    componentWillReceiveProps(nextProps) {
        this.setState({ imgSrc: nextProps.profile.imgSrc });  
    }

    slideLeft = () =>{
        this.props.slideLeftFunc()
    }

    slideRight = () =>{
        this.props.slideRightFunc()
    }


    render(){
        return(
            <div className="photo-bg">
                <div className ="bg">
                    <img src={bg} alt="asd"></img>
                </div>
                <div className="profile-photo">
                    <img src={this.state.imgSrc} alt="asd"></img>
                    <div className="navigator">
                    <button id="left" onClick={this.slideLeft}>
                        <img src={btnLeft} alt="prev"></img>
                    </button>
                    <button id="right" onClick={this.slideRight}>
                        <img src={btnRight} alt="next"></img>
                    </button>
                </div>
                </div>
            </div>
        )
    }
}

export default ProfilePhoto;