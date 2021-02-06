import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from "@chakra-ui/react"

const ProgressAlert = ({ percentage }) => {
  return (
    <div className='progress'>
      <Progress hasStripe value={percentage} />
    </div>
  );
};

Progress.propTypes = {
  percentage: PropTypes.number.isRequired
};

export default ProgressAlert;