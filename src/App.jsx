import { useEffect } from 'react';
import { RouterProvider, usePath } from './lib/router.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Roofing from './pages/Roofing.jsx';
import SeamlessGutters from './pages/SeamlessGutters.jsx';
import Gallery from './pages/Gallery.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

const DEFAULT_TITLE = 'C.F.S. Roofing & Gutters | Roofing & Roof Trusses in Kempton Park';

const ROUTES = {
  '/': Home,
  '/roofing': Roofing,
  '/seamless-gutters': SeamlessGutters,
  '/gallery': Gallery,
  '/about': About,
  '/contact': Contact,
};

function Route({ path }) {
  useEffect(() => {
    document.title = DEFAULT_TITLE;
  }, [path]);

  const Page = ROUTES[path] || NotFound;
  return <Page />;
}

export default function App() {
  const path = usePath();
  return (
    <RouterProvider>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header path={path} />
      <main id="main">
        <Route path={path} />
      </main>
      <Footer />
    </RouterProvider>
  );
}
