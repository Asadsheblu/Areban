
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Componnets/Header/Header';
import Banner from './Componnets/Banner/Banner';
import Provides from './Componnets/Provides/Provides';
import Serve from './Componnets/Provides/Serve';


function App() {
  return (
    <div className='body'>
   <Header/>
   <Banner/>
   <Provides/>
   <Serve/>
      {/* <Routes>

        <Route path='/' element={<Vocabularycateg/>} ></Route>
        <Route path='/vocabulary' element={<Vocabularyadd/>} ></Route>
      </Routes> */}
     
    </div>
  );
}

export default App;
