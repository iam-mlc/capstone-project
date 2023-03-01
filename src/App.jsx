import './App.css';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';
import Home from './pages/Home/Home'
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
