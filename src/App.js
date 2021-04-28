import logo from './logo.svg';
import './App.css';
import DATA, { data } from './data'
import NAV from './componenet/navbar/nav'
import MAIN from './componenet/main/main'
import FOOTER from './componenet/footer/footer'
function App() {
  return (
    <div className="App" >
      <NAV fullName= {data.fullName} profession={data.profession} HOME={data.HOME}
      RESUME={data.RESUME} PROJECTS={data.PROJECTS} CONTACT={data.CONTACT}/>
      <MAIN photoprofil={data.photoprofil} about={data.about}></MAIN>
      <FOOTER></FOOTER>
      
    </div>
  );
}

export default App;
