import './App.css';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';
import Home from './pages/Home/Home'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Booking from './pages/Booking/Booking';
import links from './utils/navigationLinks';

function App() {

   const {url : booking}= links[3]
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path={booking} element={<Booking/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
