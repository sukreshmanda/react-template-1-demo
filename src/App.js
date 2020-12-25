import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'
import logo from "./img.jpg"
import instagram from "./instagram.png";
import twitter from "./twitter.png";
import linkedin from "./linkedin.png";
import Panel from './Panel';

function App() {
  var location = "https://goo.gl/maps/Aun9Qfenbitnd3qC9";
  var phone = "+918466064237";
  var email = "mandasukresh@gmail.com";
  var address = "Pedaputhedu, Andhra Pradhesh"
  var instagram_link = "https://www.instagram.com/excitation_energy/";
  var linkedin_link = 'https://www.linkedin.com/in/manda-sukresh-002640167/';
  var twitter_link = 'https://twitter.com/mandasukresh';
  return (
    <div className="App">
      <div className="main">
        <Panel logo={logo} twitter_link={twitter_link} linkedin_link={linkedin_link} instagram_link={instagram_link} instagram={instagram} twitter={twitter} linkedin={linkedin} location={location} phone={phone} email={email} address={address}/>
      </div>   
    </div>
  );
}

export default App;
