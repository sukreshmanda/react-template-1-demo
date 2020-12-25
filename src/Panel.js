import {Component} from 'react';
import Weblinks from './Weblinks';

class Panel extends Component{
    constructor(props){
        super(props)
        this.email = this.email.bind(this)
        this.phone = this.phone.bind(this)
        this.location = this.location.bind(this)
    }
    email(){
        window.open('mailto:'+this.props.email,'new_window');
    }
    phone(){
        window.open('tel:'+this.props.phone,'new_window');
    }
    location(){
        window.open(this.props.location,'new_window');
    }
    render(){
        return(
            <div className="align-items-center sidepanel ">
                <div className="local">
                    <img src={this.props.logo} alt="logo" className="img-small"></img>
                    <h1 className="name">Sukresh Manda</h1>
                    <h1 className="tag">Web Developer</h1>
                    <Weblinks twitter_link={this.props.twitter_link} linkedin_link={this.props.linkedin_link} instagram_link={this.props.instagram_link} instagram={this.props.instagram} twitter={this.props.twitter} linkedin={this.props.linkedin}/>
                    <div className="email-template" onClick={this.email}>
                        <h3 className="email" id="email">{this.props.email}</h3>
                    </div>
                    <p className="phone" onClick={this.phone}>{this.props.phone}</p>
                    <i class='fas fa-globe' onClick={this.location}>{this.props.address}</i>
                </div>
            </div>
        );
    }
}
export default Panel;