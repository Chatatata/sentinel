import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Form, Row } from 'react-bootstrap';

const Header = styled.h4``;

const Group = props => (
  <Form.Group>
    {props.compact ? (
      <Header>
        <FormattedMessage {...props.headerMessage} />
      </Header>
    ) : null}
    <Row>{props.children}</Row>
  </Form.Group>
);

Group.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),

  headerMessage: PropTypes.object,
  compact: PropTypes.bool,
};

Group.defaultProps = {
  compact: false,
};

export default Group;
