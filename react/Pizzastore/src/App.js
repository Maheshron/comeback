
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Cart from "./components/Cart";
import { BrowserRouter, Routes,Route,Navigate  } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Products from './components/Products';
import Navbar from './components/Navbar';
import './App.css';
import CartProvider from './CartContext';



function App() {

  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute = ({children}) =>{
      if(!currentUser){
        return <Navigate to = "/login" />
      }
      return children
  }

  return (

    <div className='container'>
     <CartProvider>
    <BrowserRouter>
     <Navbar />
        <Routes>

    
          <Route path="/">
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
            <Route path="products" element={<Products />} />

            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
    </BrowserRouter>
    </CartProvider>
    </div>
    
  );
}

export default App;
