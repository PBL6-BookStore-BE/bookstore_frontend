import { FormErrorMessage } from '@chakra-ui/react';
import React from 'react';
import PropTypes from "prop-types";

const ErrorMessage = (props) => {
    const { error="" } = props;
    console.log(error);
    return (
        <FormErrorMessage as="p">{error}</FormErrorMessage>
    );
};
ErrorMessage.propTypes = {
  error: PropTypes.string
}
export default ErrorMessage;