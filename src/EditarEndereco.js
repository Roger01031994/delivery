import React, { useState, useEffect } from "react";
import './App.css';
import { useNavigate } from "react-router-dom";

const AddressEdit = ({ address = { lote: '', descricao: '', planeta: '' } }) => {
  const [lote, setLote] = useState(address.lote);
  const [descricao, setDescricao] = useState(address.descricao);
  const [planeta, setPlaneta] = useState(address.planeta);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Endereço editado: Lote ${lote}, Descrição ${descricao}, Planeta ${planeta}`
    );
  };

  useEffect(() => {
    if (address) {
      setLote(address.lote);
      setDescricao(address.descricao);
      setPlaneta(address.planeta);
    }
  }, [address]);

  const iniciall = useNavigate()
  function inicial(){
  iniciall('/')
}

  return (
    <div>
     <button id="editar"  onClick={inicial}>Voltar</button>
    <div className="address-edit">
      <h2>Edição de Endereço</h2>
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
          <select
            value={planeta}
            onChange={(event) => setPlaneta(event.target.value)}
          >
            <option value="Marte">Marte</option>
            <option value="Terra">Terra</option>
          </select>
        </label>
        <br />
        <button id="alterar"  type="submit">Salvar Alterações</button>
      </form>
     </div>
    </div>
  );
};

export default AddressEdit;