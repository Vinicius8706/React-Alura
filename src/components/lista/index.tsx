import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './Lista.module.scss';

 // coloca a tipagem fora dos dois pontos

function Lista({ tarefas }: { tarefas: ITarefa[] }) {

  return (
    <aside className={style.listaTarefas} >
      <h2 >Estudos do dia</h2>
      <ul >
        {tarefas.map((item, index) => (
          <Item
            key={index}
            {...item} // usa todos os atributos dentro do objeto como props para esse componenente, se tiver muitas propriedades da um spread e mostra tudo(cuidado para usar com api)
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;