import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'
import logo from "./img.jpg"
import instagram from "./instagram.png";
import twitter from "./twitter.png";
import linkedin from "./linkedin.png";
import Panel from './Panel';

function App() {
  return (
    <div className="App">
      <div className="main">
        <Panel logo={logo} instagram={instagram} twitter={twitter} linkedin={linkedin}/>
      </div>   
    </div>
  );
}

export default App;
