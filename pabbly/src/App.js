import logo from './logo.svg';
import './App.css';
import Navbar from './Component/navbar';
import Login from './Component/Login';
import Allroutes from './routes/Allroutes';
import Taskitem from './TaskComp/Taskitem';

function App() {
  // const token = useSelector((state) => state.user.token);
  // console.log(token);
  return (
    <div className="App">
    <Navbar/>
   <Allroutes/>


  
    </div>
  );
}

export default App;
