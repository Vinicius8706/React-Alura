import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './Lista.module.scss';

// coloca a tipagem fora dos dois pontos

interface Props {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSeleciona: ITarefa) => void
}

function Lista({ tarefas,selecionaTarefa }: Props) {

  return (
    <aside className={style.listaTarefas} >
      <h2 >Estudos do dia</h2>
      <ul >
        {tarefas.map(item => (
          <Item selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item} // usa todos os atributos dentro do objeto como props para esse componenente, se tiver muitas propriedades da um spread e mostra tudo(cuidado para usar com api)
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;