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
      <div className={styles.contentTask}>
        <img src={clipboard} alt="Clipboard" />
        <p className={styles.boldText}>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </>
  )
}