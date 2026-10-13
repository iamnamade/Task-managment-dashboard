import React from 'react';
import { BoardLayout } from './components/BoardLayout';
import { TrackerContainer } from './components/TrackerContainer';

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Task Management Dashboard</h1>
      <BoardLayout />
      <TrackerContainer />
    </div>
  );
}