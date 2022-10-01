import { useMutation, useQueryClient } from 'react-query';

export const useTaskUpdateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ['task-update'],
    (task) => {
      queryClient.setQueryData(['tasks'], (old) =>
        old.map((t) => (t.id === task ? { ...t, reminder: !t.reminder } : t))
      );

      return fetch('http://localhost:5000/tasks', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });
    },
    {
      onSuccess: () => {
        // queryClient.invalidateQueries(['tasks']);
      },
    }
  );
};
