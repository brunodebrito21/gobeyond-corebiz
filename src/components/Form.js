import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import styles from "../styles/form.module.css";

export default function Form({ handleElevateState }) {
  const [venda, setVenda] = useState(0);
  const [nome, setNome] = useState("");
  const [salario, setSalario] = useState(0);
  const [total, setTotal] = useState(0);

  function handleGetName(event) {
    setNome(event.target.value);
  }

  function handleGetSalary(event) {
    setSalario(Number(event.target.value));
  }

  useEffect(() => {
    setTotal(Number(venda * 0.15 + salario).toFixed(2));
  }, [venda, salario]);

  
  function handleGetSale(event) {
    setVenda(Number(event.target.value));
  }

  function handleSubmit(event){
    event.preventDefault();

    handleElevateState(oldValue => [...oldValue, {
        nome, 
        salario,
        total
    }]);
    
    setNome("");
    setSalario(0);
    setVenda(0);
  };


  return (
    <div className={styles.containerForm}>
      <form onSubmit={handleSubmit}>
        <div className={styles.logo}>
          <img src={logo} width="100%" alt="logo" />
        </div>
        <fieldset>
          <label>Nome do Vendedor</label>
          <input
            onChange={handleGetName}
            type="text"
            placeholder="Digite o nome do vendedor"
            name="nome_vendedor"
            value={nome}
            required
          ></input>
          <label>Salário do Vendedor</label>
          <input
            onChange={handleGetSalary}
            type="number"
            name="salario_vendedor"
            placeholder="0000,00"
            value={salario}
            required
          ></input>
          <label>Valor Total de Vendas no Mês</label>
          <input
            onChange={handleGetSale}
            type="number"
            name="total_vendas"
            placeholder="0000,00"
            value={venda}
            required
          ></input>
          <button type="submit">
            Cadastrar
          </button>
        </fieldset>
      </form>
    </div>
  );
}
