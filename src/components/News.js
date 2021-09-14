import React from "react"
import styles from "../styles/news.module.css"

function News(){
    return(
        <div>
            <div id={styles.news}>
                <div className={styles.titulo} ><p>Participe de nossas news com promoções e novidades!</p></div>
                <div id={styles.inputs}>
                    <input type="text" placeholder="Digite seu nome"></input>
                    <input type="text" placeholder="Digite seu e-mail"></input>
                    <button>Eu quero!</button>
                </div>
            </div>

        </div>
    )
}
export default News;