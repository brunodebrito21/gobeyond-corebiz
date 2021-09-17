import React from "react"
import styles from "../styles/table.module.css"

export default function Table({vendedores}){
    function handleRenderSellers(){
       let content =  vendedores.map(vendedor=>vendedor.nome!==""&&vendedor.salario!==""?(<tr>
            <td>{vendedor.nome}</td>
            <td>{vendedor.total}</td>
        </tr>):console.log("posição vazia"))
        return content
    }
    
    return(
            <div className={styles.containerTable}>
                    <table>
                        <thead>
                            <tr>
                                <td>Nome</td>
                                <td>Valor a Receber</td>
                            </tr>
                        </thead>
                        <tbody>
                            {vendedores?handleRenderSellers():<tr> Cadastre algum vendedor . . .</tr>}
                        </tbody>
                    </table>
            </div>
    )
}