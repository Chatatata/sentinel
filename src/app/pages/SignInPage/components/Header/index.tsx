/**
 *
 * Header
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';

import { messages } from './messages';

interface Props {}

const Wrapper = styled.div`
  padding: 68px 16px 0 16px;
`;

const H = styled.h1`
  font-weight: 400;
  text-align: left;
  line-height: 30px;
  text-size-adjust: 100%;
`;

export default function Header(_: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation();

  return (
    <Wrapper>
      <H>{t(...messages.title())}</H>
    </Wrapper>
  );
}
