import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css'; //npx -p devextreme-cli devextreme add devextreme-react

import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; //npm install -S react-router-dom
import Home from './Pages/Home.js';
import ActorLookup from './Pages/actorLookup.js';
import MovieLookup from './Pages/movieLookup.js';



function App() {
  return (
      <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/actorLookup' element={<ActorLookup />} />
          <Route path='/movieLookup' element={<MovieLookup />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;