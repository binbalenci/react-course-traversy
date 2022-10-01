import { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useTaskQuery } from './query-hooks/useTasksQuery';
import { useTasksUpdateMutation } from './query-hooks/useTasksUpdateMutation';

// const fetchTasks = async () => {
//   return fetch('http://localhost:5000/tasks').then((e) => e.json());
// };

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const { data, isLoading, isFetching } = useTaskQuery();
  const { mutate: updateTasks } = useTasksUpdateMutation();

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className='container'>
      <Header
        title='Task Tracker'
        onShow={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {isLoading && <h3>Loading</h3>}
      {showAddTask && (
        <AddTask
          onAdd={(task) => {
            updateTasks(task);
          }}
        />
      )}
      {!!data ? (
        <Tasks tasks={data} onToggle={toggleReminder} />
      ) : (
        'No tasks to show'
      )}
    </div>
  );
};

// class App extends React.Component {
//   render() {
//     return (
//       <h1>
//         <Header />
//       </h1>
//     );
//   }
// }

export default App;
