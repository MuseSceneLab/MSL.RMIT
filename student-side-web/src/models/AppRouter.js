import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Studio from '../pages/Studio';
import Inbox from '../pages/Inbox';
import Library from '../pages/Library';
import NavBar from '../components/NavBar';
import UserSelection from '../pages/UserSelection';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Settings from '../pages/Settings';
import FAQ from '../pages/FAQ';
import Students from '../pages/Students';
import Assignments from '../pages/Assignments';
import Gallery from '../pages/Gallery';



const AppRouter = () => {

    const location = window.location.pathname;

    return (
        <>
            <Router>
                {/* Only shows Nav Bar under these URLs */}
                <div className={location === '/MSL.RMIT/#/home' ||
                                location === '/MSL.RMIT/#/studio' ||
                                location === '/MSL.RMIT/#/inbox' ||
                                location === '/MSL.RMIT/#/library' ||
                                location === '/MSL.RMIT/#/settings' ||
                                location === '/MSL.RMIT/#/students' ||
                                location === '/MSL.RMIT/#/assignments' ||
                                location === '/MSL.RMIT/#/gallery' ||
                                location === '/MSL.RMIT/#/faq'
                                ? '' : 'collapse'}>
                    <NavBar />
                </div>
                <Routes>
                    <Route path='/MSL.RMIT/#/' element={<Landing />} />
                    <Route path='/MSL.RMIT/#/user-selection' element={<UserSelection />} />
                    <Route path='/MSL.RMIT/#/home' element={<Home />} />
                    <Route path='/MSL.RMIT/#/studio' element={<Studio />} />
                    <Route path='/MSL.RMIT/#/inbox' element={<Inbox />} />
                    <Route path='/MSL.RMIT/#/library' element={<Library />} />
                    <Route path='/MSL.RMIT/#/faq' element={<FAQ />} />
                    <Route path='/MSL.RMIT/#/login' element={<Login />} />
                    <Route path='/MSL.RMIT/#/signup' element={<Signup />} />
                    <Route path='/MSL.RMIT/#/settings' element={<Settings />} />
                    <Route path='/MSL.RMIT/#/students' element={<Students />} />
                    <Route path='/MSL.RMIT/#/assignments' element={<Assignments />} />
                    <Route path='/MSL.RMIT/#/gallery' element={<Gallery />} />
                    <Route path='*' element={<Landing />} />
                </Routes>
            </Router>
        </>
    );
}

export default AppRouter;