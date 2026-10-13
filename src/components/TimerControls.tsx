import PropTypes from 'prop-types';

export const TimerControls = ({ isActive, onToggle, onReset }: any) => {
  return (
    <div style={{ marginTop: '10px' }}>
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