
import './App.css'
import Signup from './Components/Signup'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Components/Home'
import Login from './Components/Login'
import Personalised from './Components/Personalised';
import Product1 from './Components/Product1';
import Entry from './Components/Entry';
import Category from './Components/Category';
import Birthday from './Components/Birthday';
import Anniversary from './Components/Anniversary';
import Admin from './Components/Admin';
import Valentine from './Components/Valentine';
import ChrismasGift from './Components/ChrismasGift';
import Post from './Components/Post';
import ProfilePage from './Components/ProfilePage';
import HomePage from './Components/HomePage';
// import Valentine form './Components/Valentine';

// import Navbar from './Components/Navbar';
// import Slider from './Components/Slider';
// import Occasion from './Components/Occasion';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup"  element={<Signup/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Personalised" element={<Personalised/>}/>
      <Route path="/Product1"  element={<Product1/>}/>
      <Route path="/Entry" element={<Entry/>}/>
      <Route path="/Category" element={<Category/>}/>
      <Route path="/Birthday" element={<Birthday/>}/>
      <Route path="/Anniversary" element={<Anniversary/>}/>
      <Route path="/Admin" element={<Admin/>}/>
      <Route path="/Post" element={<Post/>}/>
      <Route path="/ProfilePage" element={<profilePage/>}/>
      <Route path="/Valentine" element={<Valentine/>}/>
      <Route path="/ChrismasGift" element={<ChrismasGift/>}/>
      {/* <Route path="/Slider" element={<Slider/>}/> */}
      {/* <Route path="/Occasion" element={<Occasion/>}/> */}
      {/* <Route path="/Navbar" element={<Navbar/>}/>  */}
     
      </Routes>
      </div>
      
      
    </Router>
      /* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
    
    

  );
};

export default App
