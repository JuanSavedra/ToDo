import trash from '../assets/trash.svg';
import styles from './TaskList.module.css';
import clipboard from '../assets/Clipboard.svg';
import { useState } from 'react';

interface Task {
  id: string;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [createdTasks, setCreatedTasks] = useState(0);
  const [concludedTasks, setConcludedTasks] = useState(0);

  const haveTask = true;

  if (haveTask) {
    return (
      <ul>
        <li className={styles.tasksContent}>
          <input type="checkbox" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit repudiandae soluta, non delectus  in, modi.
          </p>
          <a href="#"><img src={trash} alt="Trash" /></a>
        </li>
        <li className={styles.tasksContent}>
          <input type="checkbox" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit repudiandae soluta, non delectus  in, modi.
          </p>
          <a href="#"><img src={trash} alt="Trash" /></a>
        </li>
      </ul>
    )
  } else {
    return (
      <>
        <div className={styles.contentTask}>
          <img src={clipboard} alt="Clipboard" />
          <p className={styles.boldText}>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </>
    )
  }
}