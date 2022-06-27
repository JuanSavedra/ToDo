import { Header } from './components/Header';
import { CreateTask } from './components/CreateTask';
import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <CreateTask />
      </div>
    </div>
  )
}