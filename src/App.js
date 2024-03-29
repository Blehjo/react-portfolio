import { Routes, Route } from 'react-router-dom';

import About from "./routes/About";
import Portfolio from "./routes/Portfolio";
import Resume from "./routes/Resume";
import Contact from "./routes/Contact";

import NavTabs from "./components/NavTabs";
import Profile from './components/Profile';
import TabPages from './components/TabPages';
import Footer from './components/Footer';
import ApplicationProfile from './components/ApplicationProfile';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<><NavTabs/><Profile/><Footer/></>} >
                <Route index element={<TabPages />} />
                <Route path='about' element={<About />} />
                <Route path='portfolio' element={<Portfolio />} />
                <Route path='resume' element={<Resume />} />
                <Route path='contact' element={<Contact />} />
                <Route path='application/:id' element={<ApplicationProfile />} />
            </Route>
        </Routes>
    );
};

export default App;
