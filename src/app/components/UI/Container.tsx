import * as React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import { Container } from 'react-bootstrap';

const animateIn = keyframes`
  from {
    visibility: visible;
    opacity: 0.00;
  }

  to {
    opacity: 1.00;
  }
`;

const animateOut = keyframes`
  from {
    opacity: 1.00;
  }

  to {
    visibility: hidden;
    opacity: 0.00;
  }
`;

const Wrapper = styled(Container)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;

  transform: translate3d(-50%, 0, 0);

  &.page-enter {
    animation: ${animateIn} 0.5s ease-out forwards;
  }

  &.page-exit {
    animation: ${animateOut} 0.3s ease-in forwards;
  }
`;

const CustomContainer = props => <Wrapper>{props.children}</Wrapper>;

CustomContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

CustomContainer.defaultProps = {};

export default CustomContainer;
