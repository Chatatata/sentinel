/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { GlobalStyle } from 'styles/global-styles';

import { SignInPage } from './pages/SignInPage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';

export function App() {
  const { i18n } = useTranslation();

  let basename = '/';

  if (process.env.NODE_ENV === 'production') {
    basename = '/sentinel';
  }

  return (
    <BrowserRouter basename={basename}>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={SignInPage} />
        <Route exact path="/sign-in" component={SignInPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
