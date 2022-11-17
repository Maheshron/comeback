
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Cart from "./components/Cart";
import { BrowserRouter, Routes,Route,Navigate  } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {

  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute = ({children}) =>{
      if(!currentUser){
        return <Navigate to = "/login" />
      }
      return children
  }

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
           <Route 
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
           />
            <Route  path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />

            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;