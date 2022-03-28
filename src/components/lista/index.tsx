import React from 'react';
import Item from './Item';
import style from './Lista.module.scss';

function Lista() {
  const tarefas = [{
    tarefa: "React",
    tempo: "02:00:00",
  }, {
    tarefa: "JavaScript",
    tempo: "01:00:00",
  }, {
    tarefa: "TypeScript", tempo: "03:00:00"
  }
  ]
  return (
    <aside>
      <h2>Estudos do dia</h2>
      <ul className={style.listaTarefas}>
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