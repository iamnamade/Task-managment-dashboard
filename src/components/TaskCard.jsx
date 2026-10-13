import React from 'react';
import PropTypes from 'prop-types';

export const TaskCard = ({ task, onStatusChange, onDelete }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      backgroundColor: '#fff',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '6px'
    }}>
      <h4 style={{ margin: '0 0 5px 0' }}>{task.title}</h4>
      
      {task.isOverdue && (
        <span style={{ color: 'red', fontSize: '12px', fontWeight: 'bold' }}>
          ვადაგადაცილებულია!
        </span>
      )}

      <div style={{ marginTop: '10px', display: 'flex', gap: '5px' }}>
        <select 
          value={task.status} 
          onChange={(e) => onStatusChange(task.id, e.target.value)}
          style={{ fontSize: '12px' }}
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <button onClick={() => onDelete(task.id)} style={{ color: 'red', fontSize: '12px' }}>
          წაშლა
        </button>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    isOverdue: PropTypes.bool
  }).isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};