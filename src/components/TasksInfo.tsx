import styles from './TasksInfo.module.css';

export function TasksInfo() {
  return (
    <div className={styles.content}>
      <div className={styles.createdTasks}>
        <p>Tarefas criadas <span>0</span></p>
      </div>
      <div className={styles.concludedTasks}>
        <p>Concluídas <span>0 de 0</span></p>
      </div>
    </div>
  )
}