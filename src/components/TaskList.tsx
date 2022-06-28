import styles from './TaskList.module.css';
import clipboard from '../assets/Clipboard.svg';

export function TaskList() {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.createdTasks}>
          <p>Tarefas criadas <span>0</span></p>
        </div>
        <div className={styles.concludedTasks}>
          <p>Concluídas <span>0</span></p>
        </div>
      </div>
    </>
  )
}