
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';
import InNav from './pages/InNav';
import Search from './pages/Search';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Search/>
     <InNav/>
     <AllRoutes/>
    </div>
  );
}

export default App;
