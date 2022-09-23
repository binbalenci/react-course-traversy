import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch('http:localhost:5000/tasks');
    };
  });

  // Add task
  const addTask = (task) => {
    // Add the task to the list
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        text: task.text,
        day: task.day,
        reminder: task.reminder,
      },
    ]);
  };

  // Delete task
  const deleteTask = (id) => {
    // Show the remaining tasks after deleting one
    setTasks(tasks.filter((task) => task.id !== id));
  };

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
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
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
