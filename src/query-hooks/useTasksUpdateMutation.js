import { useMutation, useQueryClient } from 'react-query';
import { nanoid } from 'nanoid';

export const useTasksUpdateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ['tasks-update'],
    (task) =>
      fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: nanoid(24),
          ...task,
        }),
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['tasks']);
      },
    }
  );
};
