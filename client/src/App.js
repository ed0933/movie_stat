import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css'; //npx -p devextreme-cli devextreme add devextreme-react

import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; //npm install -S react-router-dom
import Home from './Pages/Home.js';
import SignIn from './Pages/signin.js';
import SignUp from './Pages/signup.js';
import Actor from './Pages/actor.js';
import Movie from './Pages/movie.js';



function App() {
  return (
      <div>
      <Router>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/actor' element={<Actor />} />
          <Route path='/movie' element={<Movie />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;