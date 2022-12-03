import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css'; //npx -p devextreme-cli devextreme add devextreme-react

import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; //npm install -S react-router-dom
import Home from './Pages/Home.js';
import SignIn from './Pages/signin.js';
import SignUp from './Pages/signup.js';



function App() {
  return (
      <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;