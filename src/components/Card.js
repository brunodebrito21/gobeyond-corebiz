import React from "react"
import styles from "../styles/card.module.css"
import tag_off_img from "../assets/card_imgs/tag_off.png"
import product_img from "../assets/card_imgs/product.png"
import whatsapp_icon from "../assets/card_imgs/whatsapp.png"
import star_icon from "../assets/card_imgs/star.png"
import star_clicked from "../assets/card_imgs/star_clicked.png"

function Card(){
    return(
        <>
            <div className={styles.card_product} >
                        <img src={tag_off_img} alt="tag de promocao"/>
                        <p>OFF</p>
                        <img src={product_img} alt="foto do produto"/>
                        <span id={styles.productName}>sapato floater preto</span>
                        <div id={styles.rating}>
                            <img src={star_clicked} alt="icone de avaliacao do produto"/>
                            <img src={star_icon} alt="icone de avaliacao do produto"/>
                            <img src={star_icon} alt="icone de avaliacao do produto"/>
                            <img src={star_icon} alt="icone de avaliacao do produto"/>
                            <img src={star_icon} alt="icone de avaliacao do produto"/>
                        </div>
                        <div id={styles.price}>
                            <small>de R$ 299,00</small><br/>
                            <span id={styles.currentPrice}><b>por R$ 259,90</b></span><br/>
                            <small>ou em 9x de R$ 28,87</small>
                        </div>
                        <div id={styles.addCart_buy}>
                            <button className={styles.whatsButton}><img src={whatsapp_icon} alt="icone do whatsapp"/>Comprar</button>
                        </div>
                    </div>

        </>
    )
}
export default Card;