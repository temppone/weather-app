import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
import { mainTheme } from './styles/theme';

const Home = lazy(() => import('./pages/Home'));
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={mainTheme}>
        <GlobalStyles />
        <Suspense fallback={<div>Carregando...</div>}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/*" element={<div>NOT FOUND 404</div>} />
            </Routes>
          </Router>
        </Suspense>
      </ThemeProvider>
    </div>
  );
}

export default App;
