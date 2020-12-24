import {Component} from 'react';

class Weblinks extends Component{
    constructor(props){
        super(props)
        this.linksclicked = this.linksclicked.bind(this)
    }
    linksclicked(event){
        if(event.target.alt === 'instagram'){
            window.open('https://www.instagram.com/excitation_energy/','new_window');
        }else if(event.target.alt === 'linkedin'){
            window.open('https://www.linkedin.com/in/manda-sukresh-002640167/','new_window');
        }else if(event.target.alt === 'twitter'){
            window.open('https://twitter.com/mandasukresh','new_window');
        }else{
            console.log("Error")
        }
    }
    render(){
        return(
            <ul className="p-0 mt-4">
                <li className="d-inline p-2 instagram">
                    <img src={this.props.instagram} className="rounded-circle img-fluid social" onClick={this.linksclicked} alt="instagram"></img>
                </li>
                <li className="d-inline p-2 linkedin">
                    <img src={this.props.linkedin} className="rounded-circle img-fluid social" onClick={this.linksclicked} alt="linkedin"></img>
                </li>
                <li className="d-inline p-2 twitter">
                    <img src={this.props.twitter} className="rounded-circle img-fluid social" onClick={this.linksclicked} alt="twitter"></img>
                </li>
            </ul>
        );
    }
}
export default Weblinks;