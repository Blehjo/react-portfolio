import { Routes, Route } from 'react-router-dom';

import NavTabs from "./components/NavTabs";
import About from "./routes/About";
import Portfolio from "./routes/Portfolio";
import Resume from "./routes/Resume";
import Contact from "./routes/Contact";
import Profile from './components/Profile';
import TabPages from './components/TabPages';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<><NavTabs/><Profile/></>} >
                <Route index element={<TabPages />} />
                <Route path='about' element={<About />} />
                <Route path='portfolio' element={<Portfolio />} />
                <Route path='resume' element={<Resume />} />
                <Route path='contact' element={<Contact />} />
            </Route>
        </Routes>
    );
};

export default App;
