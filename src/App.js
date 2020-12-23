import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'
import logo from "./img.jpg"
import instagram from './instagram.png'
import linkedin from './linkedin.png'
import twitter from './twitter.png'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="sidepanel col-md-3 border border-dark box">
            <div className="center pt-4 ">
              <img src={logo} className="rounded-circle img-fluid half border border-dark " alt="simple"></img>
            </div>
            <h1 className="name pt-4">Sukresh Manda</h1>
            <p className="tag mt-4">Software Developer</p>
            <ul className="p-0 mt-4">
             <li className="d-inline p-2 instagram">
               <img src={instagram} className="rounded-circle img-fluid social " alt="instagram"></img>
             </li>
             <li className="d-inline p-2 linkedin">
               <img src={linkedin} className="rounded-circle img-fluid social" alt="linkedin"></img>
             </li>
             <li className="d-inline p-2 twitter">
               <img src={twitter} className="rounded-circle img-fluid social" alt="twitter"></img>
             </li>
            </ul>
            <div className="contacts ">
              <div className="address mt-4"><sub><i class="material-icons location">&#xe568;</i></sub>Nellore, AP</div>
              <div className="email mt-4"><a href="mailto:mandasukresh@gmail.com" className="bold">mandasukresh@gmail.com</a></div>
            </div>
          </div>
          <div className="mainpanel col-md-9 border border-dark box">
            <p>Sukresh Manda I am Sukresh i am fine</p>
          </div> 
        </div>
      </div>    
    </div>
  );
}

export default App;
