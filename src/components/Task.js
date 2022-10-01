import { FaTimes } from 'react-icons/fa';
import classNames from 'classnames';
import { useTaskDeleteMutation } from '../query-hooks/useTaskDeleteMutation';
import { useTaskUpdateMutation } from '../query-hooks/useTaskUpdateMutation';

const Task = ({ task }) => {
  const { mutate: deleteTask } = useTaskDeleteMutation();
  const { mutate: updateTask } = useTaskUpdateMutation();

  const { reminder } = task;

  return (
    <div
      className={classNames('task', { reminder })}
      onDoubleClick={() => updateTask(task.id)}
    >
      <h3>
        {String(reminder)} {typeof reminder}
        {task.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => {
            deleteTask(task.id);
          }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
