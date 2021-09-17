import React, { useState, useEffect } from "react";
import Form from "./Form";
import Table from "./Table";
import styles from "../styles/app.module.css";
import "../styles/global.css";

function App() {
  const [sellers, setSellers] = useState([]);

  function handleElevateState(vendedores) {
    setSellers(vendedores);
  }

  return (
    <div className={styles.app}>
      <Form handleElevateState={handleElevateState} />
      <Table vendedores={sellers} />
    </div>
  );
}

export default App;
