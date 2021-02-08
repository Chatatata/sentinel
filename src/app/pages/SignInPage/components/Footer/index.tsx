/**
 *
 * Footer
 *
 */
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';

import { messages } from './messages';

interface Props {}

const Wrapper = styled.div`
  position: relative;
  padding: 32px 16px;
`;

const LegalNotice = styled.h6``;

const Disclaimer = styled.p`
  width: 80%;
  font-size: 0.7rem;
`;

const Copyright = styled.p`
  margin-top: 40px;
  font-size: 0.75rem;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const LinkButton = styled(Link)`
  font-size: 0.8rem;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`;

const LanguageSelector = styled(Button)`
  position: absolute;
  bottom: 32px;
  right: 16px;

  display: flex !important;

  flex-direction: row;
  align-items: center;

  font-size: 18px;
`;

const Language = styled.p`
  margin-left: 8px;
  margin-bottom: 0;
`;

export default function Footer(_: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation();

  return (
    <Wrapper>
      <LegalNotice>{t(...messages.legalNotice())}</LegalNotice>
      <Disclaimer>{t(...messages.disclaimer())}</Disclaimer>
      <Copyright>{t(...messages.copyright())}</Copyright>
      <ButtonsWrapper>
        <LinkButton to="/privacy-policy">Privacy Policy</LinkButton>
        <LinkButton to="/terms-of-conditions">Terms of Conditions</LinkButton>
        <LinkButton to="/end-user-license-agreement">
          End User License Agreement
        </LinkButton>
      </ButtonsWrapper>
      <LanguageSelector variant="outline-info">
        <FontAwesomeIcon icon="language" />
        <Language>English</Language>
      </LanguageSelector>
    </Wrapper>
  );
}
