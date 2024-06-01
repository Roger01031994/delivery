import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

const AddressForm = () => {
  const [lote, setLote] = useState('');
  const [descricao, setDescricao] = useState('');
  const [planeta, setPlaneta] = useState('Marte');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Endereço cadastrado: Lote ${lote}, Descrição ${descricao}, Planeta ${planeta}`);
  };
  const editarr = useNavigate()
  function editar(){
   editarr('/editar')
  }
  return (
    <div>
  <header>
    <h1>SpaceX</h1>
    <div id='lista'>
      <ul>
        <li>Loja</li>
        <li>Registro</li>
        <li>Atualizar</li>
      </ul>
    </div>
   <button id='editar' onClick={editar} >EditarEnde</button>
  </header>
    <div className="address-form">
      <h2>Cadastro de Endereço</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Lote (4 dígitos):
          <input
            type="number"
            value={lote}
            onChange={(event) => setLote(event.target.value)}
            required
            minLength={4}
            maxLength={4}
          />
        </label>
        <br />
        <label>
          Descrição:
          <input
            type="text"
            value={descricao}
            onChange={(event) => setDescricao(event.target.value)}
          />
        </label>
        <br />
        <label>
          Planeta:
          <select value={planeta} onChange={(event) => setPlaneta(event.target.value)}>
            <option value="Marte">Marte</option>
            <option value="Terra">Terra</option>
          </select>
        </label>
        <br />
        <button className='Cadastrar' type="submit">Cadastrar</button>
      </form>
    </div>
    
    </div>
  );
};

export default AddressForm;