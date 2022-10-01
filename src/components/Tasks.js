import Task from './Task';

const Tasks = ({ tasks }) => {
  // Now tasks are inside of our component instead of being outside
  // In order to change tasks, we can use setTasks
  // State is immutable so you cannot use tasks.push()
  // const [tasks, setTasks] = useState([
  //   {
  //     id: 1,
  //     text: 'Do something',
  //     day: 'today',
  //     reminder: true,
  //   },
  //   {
  //     id: 2,
  //     text: 'Do another thing',
  //     day: 'someday',
  //     reminder: false,
  //   },
  // ]);

  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};

export default Tasks;
