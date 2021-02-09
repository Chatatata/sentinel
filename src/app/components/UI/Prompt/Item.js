import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

import { Col, Form } from 'react-bootstrap';

const Wrapper = styled(Col)`
  padding-top: 1rem;
  padding-bottom: 0.25rem;
`;

const Item = props => {
  const {
    labelMessage,
    descriptionMessage,
    placeholder,
    placeholderMessage,
    errorMessage,
    ...rest
  } = props;

  return (
    <Wrapper lg="12">
      <Form.Label>
        <FormattedMessage {...labelMessage} />
      </Form.Label>
      <Form.Control
        placeholder={
          placeholderMessage
            ? props.intl.formatMessage(placeholderMessage)
            : placeholder
        }
        {...rest}
      />
      {props.errorMessage ? (
        <Form.Text style={{ color: 'crimson' }}>
          <FormattedMessage {...errorMessage} />
        </Form.Text>
      ) : (
        <Form.Text className="text-muted">
          <FormattedMessage {...props.descriptionMessage} />
        </Form.Text>
      )}
    </Wrapper>
  );
};

Item.propTypes = {
  intl: intlShape,

  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  labelMessage: PropTypes.object.isRequired,
  descriptionMessage: PropTypes.object.isRequired,
  placeholderMessage: PropTypes.object,
  errorMessage: PropTypes.object,
};

export default injectIntl(Item);
