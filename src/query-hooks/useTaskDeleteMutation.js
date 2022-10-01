import { useMutation, useQueryClient } from 'react-query';

export const useTaskDeleteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ['tasks-update'],
    (id) => {
      queryClient.setQueryData(['tasks'], (old) =>
        old.filter((t) => t.id !== id)
      );

      return fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE',
      });
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(['tasks']);
      },
    }
  );
};
