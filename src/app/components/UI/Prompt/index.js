import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Form } from 'react-bootstrap';

import Group from './Group';
import Item from './Item';
import Actions from './Actions';

const Wrapper = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
`;

const Prompt = props => {
  return (
    <Wrapper>
      <Form onSubmit={props.onSubmit}>
        <Form.Group>{props.children}</Form.Group>
      </Form>
    </Wrapper>
  );
};

Prompt.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),

  onSubmit: PropTypes.func.isRequired,
};

Prompt.Group = Group;
Prompt.Item = Item;
Prompt.Actions = Actions;

export default Prompt;
