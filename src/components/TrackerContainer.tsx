import React from 'react';
import { useTimer } from '../hooks/useTimer';
import { TimerControls } from './TimerControls';

export const TrackerContainer = () => {
  const { seconds, isActive, toggleTimer, resetTimer } = useTimer();

  return (
    <div style={{ border: '1px solid black', padding: '10px', marginTop: '20px' }}>
      <h3>დროის ტრეკერი: {seconds} წამი</h3>
      <TimerControls isActive={isActive} onToggle={toggleTimer} onReset={resetTimer} />
    </div>
  );
};