import React, {Component} from 'react';
import '../styles/App.css';
import ProfileDescriptionContainer from '../container/profileDescriptionContainer.js';
import ProfilePhotoContainer from '../container/profilePhotoContainer.js';
import img1 from '../images/image-tanya.jpg';
import img2 from '../images/image-john.jpg';
// import btnLeft from '../images/icon-prev.svg';
// import btnRight from '../images/icon-next.svg';

const profileArr = [
    {
        description: "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
        name: "Tanya Sinclair",
        profile: "UX Engineer",
        imgSrc:  img1
    },
    {
        description: "If you want to lay the best foundation possible, I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
        name: "John Tarkpor",
        profile: "Junior Front-end Developer",
        imgSrc: img2
    }
]

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            profile  : profileArr[0]
        }
    }

    slideLeft = () =>{
        var currIndex = profileArr.indexOf(this.state.profile);
        var nextIndex = currIndex - 1;
        if(nextIndex<0){
            nextIndex = profileArr.length -1;
        }
        this.setState({
            profile : profileArr[nextIndex]
        })
        console.log(this.state.profile)
    }
    
    
    slideRight = () =>{
        var currIndex = profileArr.indexOf(this.state.profile);
        var nextIndex = (currIndex + 1)%profileArr.length;
        this.setState({
            profile : profileArr[nextIndex]
        })
        console.log(this.state.profile)
    }

    render(){
        return(
            <div>
                <ProfileDescriptionContainer profile = {this.state.profile}></ProfileDescriptionContainer>
                <ProfilePhotoContainer profile = {this.state.profile} slideLeftFunc={this.slideLeft} slideRightFunc={this.slideRight}></ProfilePhotoContainer>
            </div>
        )
    }
}

export default Home