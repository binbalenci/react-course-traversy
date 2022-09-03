import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Do something',
      day: 'today',
      reminder: true,
    },
    {
      id: 2,
      text: 'Do another thing',
      day: 'someday',
      reminder: true,
    },
    {
      id: 3,
      text: 'Do nothing',
      day: 'everyday',
      reminder: false,
    },
  ]);

  return (
    <div className='container'>
      <Header title='Task Tracker' />
      <Tasks tasks={tasks} />
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
