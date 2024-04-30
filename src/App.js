import './App.css';
import Registration from './components/Registration'
import Login from './components/Login';
import Appbar from './components/Appbar';
import Profile from './components/Profile';
import Cases from './components/Cases';
import Covid from './components/Covid';
import Error from './components/Error';
import Homepage from './components/Homepage';
import logo from './components/Logo/covid1.png'

function App({store}) {

function Page(){
  switch(store.getState().NavReducer){
    case"Homepage":
         return(<div><Homepage/></div>)
    case "Login":
         return(<div><Login store={store} /></div>)
    case "Registration":
         return (<div><Registration/></div>)
    case "Profile":
      if(localStorage.getItem("role") == 1)
         return(<div><Profile/></div>) 
      else
        return(<div><Error/></div>)
    case "Cases":
      if(localStorage.getItem("role") == 1)
        return(<div><Cases/></div>)
      else
        return(<div><Error/></div>)
    case "Covid":
      if(localStorage.getItem("role") == 1 || localStorage.getItem("role") == 2)
        return(<div><Covid/></div>)
      else
        return(<div><Error/></div>)
    default:
        return "Homepage";
      
  }
}

  return (
    <div className="App">
      <div className="App-body">
        <Appbar store={store} />
        <center><Page/></center>
      </div>
    </div>
  );
}

export default App;
