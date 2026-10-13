import React, { useState, useEffect, useRef, useMemo } from 'react';
import { TaskColumn } from './TaskColumn';
import { useLocalStorageTask } from '../useLocalStorageTask'; // ან ../hooks/useLocalStorageTask

const initialTasks = [
  { id: 1, title: 'HTML სტრუქტურის აწყობა', status: 'Done', isOverdue: false },
  { id: 2, title: 'React Hooks შესწავლა', status: 'In Progress', isOverdue: false },
  { id: 3, title: 'პროექტის ჩაბარება', status: 'To Do', isOverdue: true }
];

export const BoardLayout = () => {
  const [tasks, setTasks] = useLocalStorageTask('task_items', initialTasks);
  const [newTitle, setNewTitle] = useState('');
  const [search, setSearch] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    document.title = `დავალებები (${tasks.length})`;
  }, [tasks]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const completedPercentage = useMemo(() => {
    if (tasks.length === 0) return 0;
    const completed = tasks.filter((t) => t.status === 'Done').length;
    return Math.round((completed / tasks.length) * 100);
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const newTask = {
      id: Date.now(),
      title: newTitle,
      status: 'To Do',
      isOverdue: false
    };
    setTasks([...tasks, newTask]);
    setNewTitle('');
    inputRef.current.focus();
  };

  const handleStatusChange = (id, newStatus) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status: newStatus } : t)));
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ border: '2px solid #ddd', padding: '15px', borderRadius: '10px' }}>
      <h2>Kanban დაფა</h2>
      <p>შესრულების პროგრესი: <strong>{completedPercentage}%</strong></p>

      <form onSubmit={handleAddTask} style={{ marginBottom: '15px' }}>
        <input
          ref={inputRef}
          type="text"
          placeholder="ახალი დავალების სახელი..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          style={{ padding: '6px', width: '220px', marginRight: '5px' }}
        />
        <button type="submit" style={{ padding: '6px 12px' }}>დამატება</button>
      </form>

      <input
        type="text"
        placeholder="დავალებების ძებნა..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '6px', width: '220px', marginBottom: '15px' }}
      />

      <div style={{ display: 'flex', gap: '15px' }}>
        <TaskColumn
          title="To Do"
          tasks={filteredTasks.filter((t) => t.status === 'To Do')}
          onStatusChange={handleStatusChange}
          onDelete={handleDelete}
        />
        <TaskColumn
          title="In Progress"
          tasks={filteredTasks.filter((t) => t.status === 'In Progress')}
          onStatusChange={handleStatusChange}
          onDelete={handleDelete}
        />
        <TaskColumn
          title="Done"
          tasks={filteredTasks.filter((t) => t.status === 'Done')}
          onStatusChange={handleStatusChange}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};