import { useQuery } from 'react-query';

export const useTaskQuery = () => {
  return useQuery(
    ['tasks'],
    () => fetch('http://localhost:5000/tasks').then((e) => e.json()),
    { refetchOnWindowFocus: false }
  );
};
