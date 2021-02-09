import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Col, Row } from 'react-bootstrap';

import PrimaryAction from './PrimaryAction';

const Wrapper = styled(Row)`
  margin-left: -4px;
  margin-right: -4px;
  margin-top: 1rem;

  & button {
    margin-left: 4px;
    margin-right: 4px;
  }
`;

const CustomCol = styled(Col)`
  display: flex;
  flex-flow: row-reverse;
`;

const Actions = props => (
  <Wrapper>
    <CustomCol>{props.children}</CustomCol>
  </Wrapper>
);

Actions.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Actions.Primary = PrimaryAction;

export default Actions;
