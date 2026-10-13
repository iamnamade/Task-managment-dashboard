import React from 'react';
import PropTypes from 'prop-types';

export const TimerControls = ({ isActive, onToggle, onReset }: any) => {
  return (
    <div>
      {/* პირობითი რენდერი ღილაკზე */}
      <button onClick={onToggle}>{isActive ? 'პაუზა' : 'დაწყება'}</button>
      <button onClick={onReset} style={{ marginLeft: '5px' }}>განულება</button>
    </div>
  );
};

TimerControls.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};