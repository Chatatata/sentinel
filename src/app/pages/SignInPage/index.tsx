/**
 *
 * SignInPage
 *
 */
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Helmet } from 'react-helmet-async';
import { Container } from 'app/components/UI';
import Header from './components/Header';
import Footer from './components/Footer';

interface Props {
  onSubmit: Function;
}

export function SignInPage(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <Helmet>
        <title>{t(...messages.title())}</title>
        <meta name="description" content="Sign in to the Quessly platform." />
      </Helmet>
      <Header />
      {/* <SignInForm onSubmit={props.onSubmit} disabled={false} /> */}
      <Footer />
    </Container>
  );
}
