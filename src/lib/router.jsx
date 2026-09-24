import { useEffect, useState, createContext, useContext } from 'react';

/*
 * Minimal path router — pushState based, no dependencies.
 * Pages live in App.jsx's route map; unknown paths render NotFound.
 */

const RouterContext = createContext({ path: '/' });

export function usePath() {
  return useContext(RouterContext).path;
}

function currentPath() {
  return window.location.pathname || '/';
}

export function RouterProvider({ children }) {
  const [path, setPath] = useState(currentPath);

  useEffect(() => {
    const onPop = () => setPath(currentPath());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

function scrollToHashTarget(hash, attempt = 0) {
  const el = document.getElementById(hash);
  if (el) {
    window.requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  } else if (attempt < 3) {
    /* page may still be rendering after a client-side route change */
    window.setTimeout(() => scrollToHashTarget(hash, attempt + 1), 120);
  }
}

export function navigate(to, { scroll = true } = {}) {
  if (to.startsWith('http')) {
    window.open(to, '_blank', 'noopener');
    return;
  }
  const hashIndex = to.indexOf('#');
  const hash = hashIndex !== -1 ? to.slice(hashIndex + 1) : '';
  const pathOnly = hashIndex !== -1 ? to.slice(0, hashIndex) : to;
  const targetPath = pathOnly || window.location.pathname;
  const samePage = targetPath === window.location.pathname;

  if (hash && samePage) {
    /* same-page hash jump: no route change, just update the URL and scroll */
    window.history.pushState({}, '', to);
    scrollToHashTarget(hash);
    return;
  }

  window.history.pushState({}, '', to);
  window.dispatchEvent(new PopStateEvent('popstate'));
  if (scroll) {
    if (hash) {
      scrollToHashTarget(hash);
    } else {
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
      });
    }
  }
}

export function Link({ to, children, className, onClick, ...rest }) {
  const isHashAnchor = to.startsWith('#');
  const href = isHashAnchor ? to : to;
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        onClick?.(e);
        if (isHashAnchor) return; /* let the browser handle anchor jumps */
        e.preventDefault();
        navigate(to);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
