
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Componnets/Header/Header';
import Banner from './Componnets/Banner/Banner';
import Provides from './Componnets/Provides/Provides';
import Serve from './Componnets/Provides/Serve';
import WorkResult from './Componnets/Provides/WorkResult';
import Partnership from './Componnets/Provides/Partnership';
import Service from './Componnets/Provides/Service';
import Coprogress from './Componnets/Provides/Coprogress';
import Contact from './Componnets/Provides/Contact';
import Footer from './Componnets/Provides/Footer';


function App() {
  return (
    <div className='body'>
   <Header/>
   <Banner/>
   <Provides/>
   <Serve/>
   <WorkResult/>
   <Partnership/>
   <Service/>
   <Coprogress/>
   <Contact/>
   <Footer/>
      {/* <Routes>

        <Route path='/' element={<Vocabularycateg/>} ></Route>
        <Route path='/vocabulary' element={<Vocabularyadd/>} ></Route>
      </Routes> */}
     
    </div>
  );
}

export default App;
