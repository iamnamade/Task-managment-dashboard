import React from 'react';
import PropTypes from 'prop-types';
import { TaskCard } from './TaskCard';

export const TaskColumn = ({ title, tasks, onStatusChange, onDelete }) => {
  return (
    <div style={{
      flex: 1,
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderRadius: '8px',
      minHeight: '220px'
    }}>
      <h3 style={{ textAlign: 'center', borderBottom: '2px solid #ddd', paddingBottom: '5px' }}>
        {title} ({tasks.length})
      </h3>
      {tasks.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#888' }}>ცარიელია</p>
      ) : (
        tasks.map((task) => (
          <TaskCard 
            key={task.id} 
            task={task} 
            onStatusChange={onStatusChange} 
            onDelete={onDelete} 
          />
        ))
      )}
    </div>
  );
};

TaskColumn.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};