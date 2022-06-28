import plus from '../assets/plus.svg';
import trash from '../assets/trash.svg';
import styles from './TaskList.module.css';
import clipboard from '../assets/Clipboard.svg';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

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
  const [haveTask, setHaveTask] = useState(false);

  function handleCreateNewTask() {
    if (!newTaskTitle) { return }

    const newTask = {
      id: uuid(),
      title: newTaskTitle,
      isComplete: false,
    }

    setTasks([...tasks, newTask]);
    setCreatedTasks(createdTasks + 1);
    setNewTaskTitle('');
    setHaveTask(true);
  }

  function handleToggleTaskCompletion(id: number) {
    
  }

  function handleRemoveTask(id: number) {
    
  }

  function Header() {
    return (
      <>
        <div className={styles.tasks}>
          <form>
            <input 
              type="text" 
              placeholder="Adicione uma nova tarefa"
              onChange={(e) => setNewTaskTitle(e.target.value)}
              value={newTaskTitle}
            />
            <button type="submit" onClick={handleCreateNewTask}>
              <div>
                <span>Criar</span> 
                <img src={plus} alt="Plus" />
              </div>
            </button>
          </form>
        </div>
        <div className={styles.content}>
          <div className={styles.createdTasks}>
            <p>Tarefas criadas <span>{createdTasks}</span></p>
          </div>
          <div className={styles.concludedTasks}>
            <p>Concluídas <span>{concludedTasks} de {createdTasks}</span></p>
          </div>
        </div>
      </>
    )
  }

  if (haveTask) {
    return (
      <>
        <Header />
        <ul>
          {tasks.map(task => (
            <li className={styles.tasksContent}>
              <input type="checkbox" />
              <p>{task.title}</p>
              <a href="#"><img src={trash} alt="Trash" /></a>
            </li>
          ))}
        </ul>
      </>
    )
  } else {
    return (
      <>
        <Header />
        <div className={styles.contentTask}>
          <img src={clipboard} alt="Clipboard" />
          <p className={styles.boldText}>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </>
    )
  }
}