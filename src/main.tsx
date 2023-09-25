import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyles';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { AboutMe } from './pages/AboutMe';
import { Projects } from './pages/Projects';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about-me" element={<AboutMe />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  </>
);
