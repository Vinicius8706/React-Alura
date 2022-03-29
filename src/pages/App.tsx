import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/formulario'
import Lista from '../components/lista';
import style from './App.module.scss';

function App() {
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
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Cronometro />
      <Lista tarefas={tarefas} />
    </div>
  );
}

export default App;
