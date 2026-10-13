import React from 'react';
import PropTypes from 'prop-types';
import { TaskCard } from './TaskCard';

export const TaskColumn = ({ title, tasks, onStatusChange, onDelete }: any) => {
  return (
    <div style={{ flex: 1, border: '1px solid #ccc', padding: '10px' }}>
      <h3>{title} ({tasks.length})</h3>
      {tasks.map((task: any) => (
        <TaskCard key={task.id} task={task} onStatusChange={onStatusChange} onDelete={onDelete} />
      ))}
    </div>
  );
};

TaskColumn.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};