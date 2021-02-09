import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'react-bootstrap';

const PrimaryAction = props => (
  <Button {...props} type="submit" variant="primary" />
);

PrimaryAction.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),

  disabled: PropTypes.bool,
};

PrimaryAction.defaultProps = {
  disabled: false,
};

export default PrimaryAction;
