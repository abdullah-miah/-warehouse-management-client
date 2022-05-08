
import { createContext, useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './componets/About/About';
import AddProducts from './componets/AddProducts/AddProducts';
import Blog from './componets/Blog/Blog';
import Delivered from './componets/Delivered/Delivered';
import Footer from './componets/Footer/Footer';
import Header from './componets/Header/Header';
import Home from './componets/Home/Home';
import Login from './componets/Login/Login';
import Management from './componets/Management/Management';
import PageNotFound from './componets/PageNotFound/PageNotFound';
import SignUp from './componets/SignUp/SignUp';
export const servicesContext = createContext();

function App() {
  const [services, setServices]=useState([]);
  return (
    <servicesContext.Provider value={[services, setServices]}>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
      <Route path='/delivered/:id' element ={<Delivered></Delivered>}></Route>
      <Route path='/management' element={<Management></Management>}></Route>
      <Route path='/addProduct' element={<AddProducts></AddProducts>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
    </Routes>
    <Footer></Footer>
    <ToastContainer />
    </servicesContext.Provider>
  
  );
}

export default App;
