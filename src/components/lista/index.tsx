import React, { useState } from 'react';
import Item from './Item';
import style from './Lista.module.scss';

function Lista() {
  const [tarefas, setTarefas] = useState([{
    tarefa: "React",
    tempo: "02:00:00",
  }, {
    tarefa: "JavaScript",
    tempo: "01:00:00",
  }, {
    tarefa: "TypeScript", tempo: "03:00:00"
  }
  ]); // funcao dentro do react e coloca um valor padrao dentro dele
  return (
    <aside className={style.listaTarefas} >
      <h2 onClick={() => {
        setTarefas ([...tarefas, { tarefa: "Estudar estado", tempo: "05:00:00" }])
      }}>Estudos do dia</h2>
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