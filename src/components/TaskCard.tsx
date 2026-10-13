import React from 'react';
import PropTypes from 'prop-types';

export const TaskCard = ({ task, onStatusChange, onDelete }: any) => {
  return (
    <div style={{ border: '1px solid gray', margin: '5px', padding: '5px' }}>
      <h4>{task.title}</h4>
      {/* პირობითი რენდერი ვადაგადაცილებულზე */}
      {task.isOverdue && <b style={{ color: 'red' }}>ვადაგადაცილებულია!</b>}
      <div>
        <select value={task.status} onChange={(e) => onStatusChange(task.id, e.target.value)}>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <button onClick={() => onDelete(task.id)}>წაშლა</button>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};