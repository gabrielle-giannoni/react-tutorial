import {Route, Routes} from "react-router-dom";
import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact';
import Error404 from './pages/Error404.js';
import Users from './pages/Users'


const Router = () => {
    return(
        <Routes>
            <Route path='/'element={<Home />} />
            <Route path='/quem-somos'element={<About />} />
            <Route path='/users'element={<Users />} />
            <Route path='/contato'element={<Contact />} />
            <Route path='/*'element={<Error404 />} />
        </Routes>
    )
}

export default Router