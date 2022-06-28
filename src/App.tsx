import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { TasksInfo } from './components/TasksInfo';
import { CreateTask } from './components/CreateTask';
import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <CreateTask />
        <TasksInfo />
        <TaskList />
      </div>
    </div>
  )
}