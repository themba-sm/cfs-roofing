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

export function navigate(to, { scroll = true } = {}) {
  if (to.startsWith('http')) {
    window.open(to, '_blank', 'noopener');
    return;
  }
  window.history.pushState({}, '', to);
  window.dispatchEvent(new PopStateEvent('popstate'));
  if (scroll) {
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    });
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
