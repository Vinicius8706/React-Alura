import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/formulario'
import Lista from '../components/lista';
import { ITarefa } from '../types/tarefa';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada),
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
         ...tarefa, selecionado:
          tarefa.id === tarefaSelecionada.id ? true : false})))
  }
  // funcao dentro do react e coloca um valor padrao dentro dele
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Cronometro />
      <Lista
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
    </div>
  );
}

export default App;
