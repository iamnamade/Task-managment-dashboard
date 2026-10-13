import React, { useState, useEffect, useRef, useMemo } from 'react';
import { TaskColumn } from './TaskColumn';
import { useLocalStorageTask } from '../hooks/useLocalStorageTask';

export const BoardLayout = () => {
  const [tasks, setTasks] = useLocalStorageTask('tasks', [
    { id: 1, title: 'დავალება 1', status: 'To Do', isOverdue: true },
    { id: 2, title: 'დავალება 2', status: 'Done', isOverdue: false },
  ]);
  const [title, setTitle] = useState('');
  const [search, setSearch] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // useEffect: document.title-ის განახლება
  useEffect(() => {
    document.title = `დავალებები: ${tasks.length}`;
  }, [tasks]);

  // useRef: ინპუტზე ფოკუსი
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // useMemo: პროცენტის დათვლა
  const percent = useMemo(() => {
    if (!tasks.length) return 0;
    const done = tasks.filter((t: any) => t.status === 'Done').length;
    return Math.round((done / tasks.length) * 100);
  }, [tasks]);

  const addTask = () => {
    if (!title) return;
    setTasks([...tasks, { id: Date.now(), title, status: 'To Do', isOverdue: false }]);
    setTitle('');
    inputRef.current?.focus();
  };

  const changeStatus = (id: number, status: string) => {
    setTasks(tasks.map((t: any) => (t.id === id ? { ...t, status } : t)));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((t: any) => t.id !== id));
  };

  const filtered = tasks.filter((t: any) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Board (შესრულებულია: {percent}%)</h2>
      <input
        ref={inputRef}
        placeholder="ახალი დავალება..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTask}>დამატება</button>
      <br /><br />
      <input
        placeholder="ძებნა..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <TaskColumn title="To Do" tasks={filtered.filter((t: any) => t.status === 'To Do')} onStatusChange={changeStatus} onDelete={deleteTask} />
        <TaskColumn title="In Progress" tasks={filtered.filter((t: any) => t.status === 'In Progress')} onStatusChange={changeStatus} onDelete={deleteTask} />
        <TaskColumn title="Done" tasks={filtered.filter((t: any) => t.status === 'Done')} onStatusChange={changeStatus} onDelete={deleteTask} />
      </div>
    </div>
  );
};