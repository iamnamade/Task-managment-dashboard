import React from 'react';
import { BoardLayout } from './components/BoardLayout';

export default function App() {
  return (
    <div style={{ maxWidth: '900px', margin: '20px auto', padding: '15px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Task Management Dashboard</h1>
      <BoardLayout />
    </div>
  );
}