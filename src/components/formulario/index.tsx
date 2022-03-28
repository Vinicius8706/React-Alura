import React from 'react';
import Botao from '../botao'
import './style.scss'
class Formulario extends React.Component {
  render() {
    return (
      <form className="novaTarefa">
        <div className="inputContainer">
          <label htmlFor="tarefa">Adicione um novo estudo</label>
        </div>
        <input type="text" name="tarefa" id="tarefa" placeholder="O que você quer estudar" required />
        <div className="inputContainer">
          <label htmlFor="tempoF">Tempo</label>
          <input type="time" step="1" name="tempo" id="tempo" min="00:00:00" max="1:30:00" required/>
        </div>
        <Botao />
      </form>
    )
  }
}

export default Formulario