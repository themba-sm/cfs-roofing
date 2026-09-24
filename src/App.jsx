import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { usePath } from './lib/router.jsx';
import Home from './pages/Home.jsx';
import Roofing from './pages/Roofing.jsx';
import SeamlessGutters from './pages/SeamlessGutters.jsx';
import Gallery from './pages/Gallery.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import FloatingActions from './components/FloatingActions.jsx';

const ROUTES = {
  '/': Home,
  '/roofing': Roofing,
  '/seamless-gutters': SeamlessGutters,
  '/gallery': Gallery,
  '/about': About,
  '/contact': Contact,
};

export default function App() {
  const path = usePath();
  const Page = ROUTES[path] || NotFound;
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header path={path} />
      <main id="main">
        <Page />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
