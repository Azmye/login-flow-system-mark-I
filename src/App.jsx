import { Route, Routes, useLocation } from 'react-router-dom';
import SignIn from './components/Login/SignIn';
import SignUp from './components/Login/SignUp';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

function App() {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div className="App">
      {pathName === '/signin' || pathName === '/signup' ? null : <NavBar />}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
