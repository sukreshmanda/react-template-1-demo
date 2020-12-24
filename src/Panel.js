import {Component} from 'react';
import Weblinks from './Weblinks';

class Panel extends Component{
    mail(){
        window.open('mailto:mandasukresh@gmail.com','new_window');
    }
    phone(){
        window.open('tel:+918466064237','new_window');
    }
    location(){
        window.open('https://goo.gl/maps/Aun9Qfenbitnd3qC9','new_window');
    }
    render(){
        return(
            <div className="align-items-center sidepanel ">
                <div className="local">
                    <img src={this.props.logo} alt="logo" className="img-small"></img>
                    <h1 className="name">Sukresh Manda</h1>
                    <h1 className="tag">Web Developer</h1>
                    <Weblinks instagram={this.props.instagram} twitter={this.props.twitter} linkedin={this.props.linkedin}/>
                    <div className="email-template">
                        <h3 className="email" onClick={this.email} id="email">mandasukresh@gmail.com</h3>
                    </div>
                    <p className="phone" onClick={this.phone}>+91 8466064237</p>
                    <i class='fas fa-globe' onClick={this.location}> Pedaputhedu, Andhra Pradesh</i>
                </div>
            </div>
        );
    }
}
export default Panel;