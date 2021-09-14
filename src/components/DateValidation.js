import React from 'react';
import PropTypes from 'prop-types';

const DateDisplay = ({ date }) => <p>{date.toString()}</p>;

DateDisplay.propTypes = {
  date: PropTypes.instanceOf(Date),
};

const dateValidation = () => {
  return (
    <div>
      <h3>
        <DateDisplay date={new Date()} />
      </h3>
    </div>
  );
};

export default dateValidation;
