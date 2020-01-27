import React, {Component} from 'react';

class Video extends Component{

    constructor(){
        super();
        this.state = {
            play: false
        }
    }
    
    click = () => {this.setState({play: true});console.log(this.state)};

    Frame =
        <div className="vidWrapper" style={{position: 'relative', paddingBottom: '56.25%', height:'0', margin: 'auto'}}>
            <iframe title="Business of Smiles by Cambo" style={{position: 'absolute', top: '0', left: '0'}} className="homeVid"width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/fnMgbeOcs40?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </div>
        
    Button = <button onClick={this.click}
        style={{ border: 'none', background: 'none', marginTop: " 10%", cursor: 'pointer'}}
        aria-label="Play button"
        >
           <svg alt="Play Button" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" stroke="#fff" fill="#fff"><path d="M3 22v-20l18 10-18 10z"/></svg>
    </button>
    
    render(){
        const {play} = this.state;
        const {Button, Frame} = this;
        return(
            <div style={{textAlign: "center"}}>
            {play ? Frame : Button}
            </div>
        )
        
    
    }
}



export default Video;