import React from 'react';
import PropTypes from 'prop-types';
import {Alert , AlertIcon} from '@chakra-ui/react';

const Message = ({ msg }) => {
  return (
    <Alert status="success" variant="left-accent">
    <AlertIcon />
    {msg}
  </Alert>
  );
};

Message.propTypes = {
  msg: PropTypes.string.isRequired
};

export default Message;