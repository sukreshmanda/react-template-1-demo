import {Component} from 'react';

class Panel extends Component{
    render(){
        return(
            <div className="align-items-center sidepanel ">
                <div className="local">
                    <img src={this.props.logo} alt="logo" className="img-small"></img>
                    <h1 className="name">Sukresh Manda</h1>
                    <ul className="p-0 mt-4">
                        <li className="d-inline p-2 instagram">
                            <img src={this.props.instagram} className="rounded-circle img-fluid social " alt="instagram"></img>
                        </li>
                        <li className="d-inline p-2 linkedin">
                            <img src={this.props.linkedin} className="rounded-circle img-fluid social" alt="linkedin"></img>
                        </li>
                        <li className="d-inline p-2 twitter">
                            <img src={this.props.twitter} className="rounded-circle img-fluid social" alt="twitter"></img>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Panel;