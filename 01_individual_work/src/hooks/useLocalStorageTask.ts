import { useState, useEffect } from 'react';
import type { Task } from '../types/task';

export const useLocalStorageTask = (key: string, initialValue: Task[]) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(tasks));
  }, [key, tasks]);

  return [tasks, setTasks] as const;
};