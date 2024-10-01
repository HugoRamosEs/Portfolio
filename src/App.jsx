import './App.scss';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Games from './components/Games/Games';
import ARMansion from './components/Games/ARMansion/ARMansion';
import Ltap from './components/Games/Ltap/Ltap';
import Web from './components/Web/Web';
import OpenAI_Hramos from './components/Web/OpenAI-Hramos/OpenAI_Hramos';
import Error404 from './components/Error404/Error404';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MenuProvider } from './contexts/MenuContext';

function App() {
    return (
        <Router>
            <MenuProvider>
                <div className='wrapper'>
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<AboutMe />} />
                            <Route path="/games" element={<Games />} />
                            <Route path="/web" element={<Web />} />
                            <Route path="/web/openai_hramos" element={<OpenAI_Hramos />} />
                            <Route path="/games/armansion" element={<ARMansion />} />
                            <Route path="/games/ltap" element={<Ltap />} />
                            <Route path="*" element={<Error404 />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </MenuProvider>
        </Router>
    );
}

export default App;
