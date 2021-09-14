import React from "react"
import styles from "../styles/section.module.css"
import arrow_left from "../assets/section_imgs/arrow_left.png"
import arrow_right from "../assets/section_imgs/arrow_right.png"
import Card from "./Card"

function Section(){
    function handleGenerateCards(){
        let cards = ["c1","c2","c3","c4","c5"]
        const renderedCards = cards.map(c=><Card/>)
        return renderedCards
    }

    return(
        <div>
            <div id={styles.container_section}>
                <div className={styles.text}>
                    <p>Mais Vendidos</p>
                </div>
                <div id={styles.line}>  
                </div>
                <section id={styles.cards_section}>
                    <img src={arrow_left} alt="seta esquerda do slide"/>
                        <div id={styles.containerCards}>
                            <div id={styles.containerCards2}>
                                {handleGenerateCards()}
                            </div>
                        </div>
                    <img src={arrow_right} alt="seta direita do slide"/>
                </section>
            </div>
        </div>
    )
}
export default Section;