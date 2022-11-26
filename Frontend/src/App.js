import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import About from './pages/About/About';
import Posts from './pages/Posts/Posts';
import SeriesInfo from './pages/SeriesInfo/SeriesInfo';
import Navbar from './Components/Navbar/Navbar';
import FAQ from './pages/FAQ/FAQ';
import SignIn from './pages/SignIn/SignIn';
import Profile from './pages/Profile/profile';

const App = () => {
  return (
   <Router>
    <Navbar/>
    <main>

          <Routes>
                 <Route exact path='/:searchText' element={< Posts />}></Route>
                 <Route path='/seriesInfo/:searchText' element={< SeriesInfo />}></Route>
                 <Route path='/faq/:searchText' element={<FAQ/>}></Route>

                 <Route exact path='/' element={< Posts />}></Route>
                 <Route path='/seriesInfo' element={< SeriesInfo />}></Route>
                 <Route path='/faq' element={<FAQ/>}></Route>

                 <Route path='/profile/:id' element={<Profile/>}></Route>
                 <Route path='/signin' element={<SignIn/>}></Route>
                 <Route path='/about' element={< About />}></Route>
          </Routes>
     
        
     
    </main>
   </Router>
  );
}

export default App;
