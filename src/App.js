// App.js
import React, {lazy, Suspense} from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import ErrorBoundary from "./components/ErrorBundry/ErrorBundry";
const Home = lazy(()=>import('./container/container'));


function App() {
  return (
      <ThemeProvider theme={theme}>
            <Suspense fallback={<div>Loading ...</div>}>
          <GlobalStyles />
             <BrowserRouter>
                <ErrorBoundary>
                <Switch>
                    <Route path={["/", "/:categoryId"]} component={Home} exact={true}/>
                </Switch>
                </ErrorBoundary>
            </BrowserRouter>
            </Suspense>
      </ThemeProvider>
  );
}
export default App;
