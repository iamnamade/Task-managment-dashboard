import { useState, useEffect } from 'react';

export const useLocalStorageTask = (key: string, initial: any[]) => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(tasks));
  }, [key, tasks]);

  return [tasks, setTasks] as const;
};