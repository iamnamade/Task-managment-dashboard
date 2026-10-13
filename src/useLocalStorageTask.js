import { useState, useEffect } from 'react';

export const useLocalStorageTask = (key, initialValue) => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(tasks));
  }, [key, tasks]);

  return [tasks, setTasks];
};