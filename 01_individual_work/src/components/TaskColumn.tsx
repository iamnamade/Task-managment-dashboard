import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../types/task';
import { TaskCard } from './TaskCard';

interface TaskColumnProps {
  title: string;
  tasks: Task[];
  onStatusChange: (id: number, status: Task['status']) => void;
  onDelete: (id: number) => void;
}

export const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks, onStatusChange, onDelete }) => {
  return (
    <div style={{
      flex: 1,
      backgroundColor: '#f5f5f5',
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