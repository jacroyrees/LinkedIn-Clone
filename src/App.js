import './App.css';
import Header from  "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed";
function App() {
  return (
    <div className="app">
      
      
      <Header/>

      <div className={"app__body"}>
      <Sidebar/>

      <Feed/>


      </div>
      
    </div>
  );
}

export default App;
