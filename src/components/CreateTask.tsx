import plus from '../assets/plus.svg';
import styles from './CreateTask.module.css';

export function CreateTask() {
  return (
    <div className={styles.tasks}>
      <form>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          <div>
            <span>Criar</span> 
            <img src={plus} alt="Plus" />
          </div>
        </button>
      </form>
    </div>
  )
}