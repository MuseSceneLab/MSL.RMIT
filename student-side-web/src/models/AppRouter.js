import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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



const AppRouter = () => {

    const location = window.location.pathname;

    return (
        <>
            <Router>
                {/* Only shows Nav Bar under these URLs */}
                <div className={location === '/home' ||
                                location === '/studio' ||
                                location === '/inbox' ||
                                location === '/library' ||
                                location === '/settings' ||
                                location === '/students' ||
                                location === '/assignments' ||
                                location === '/faq'
                                ? '' : 'collapse'}>
                    <NavBar />
                </div>
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/user-selection' element={<UserSelection />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/studio' element={<Studio />} />
                    <Route path='/inbox' element={<Inbox />} />
                    <Route path='/library' element={<Library />} />
                    <Route path='/faq' element={<FAQ />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/students' element={<Students />} />
                    <Route path='/assignments' element={<Assignments />} />
                    <Route path='*' element={<Landing />} />
                </Routes>
            </Router>
        </>
    );
}

export default AppRouter;