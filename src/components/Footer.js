import React from "react"
import contact_img2 from "../assets/footer_imgs/talkwithus_img.png"
import contact_img1 from "../assets/footer_imgs/msg_img.png"
import createdBy_img from "../assets/footer_imgs/logo_footer.png"
import poweredBy_img from "../assets/footer_imgs/logo_footer_vtex.png"
import styles from "../styles/footer.module.css"

function Footer(){
    return(
        <div>
            <footer>
                <div id={styles.footerContainer}>
                    <div id={styles.localization}>
                        <div className={styles.localizacaoWord}>
                            <p>Localização</p>
                        </div>
                        <div id={styles.line}>  
                        </div>
                        <div className={styles.adress}>
                            <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
                            <p>Alphavile SP</p>
                            <p>brasil@corebiz.ag</p>
                            <p>+55 11 30901039</p>
                        </div>
                    </div>
                    <div id={styles.footerButtons}>
                        <a href="#" className={styles.footerButton}>
                            <button >
                                <img src={contact_img1} alt="icone de carta"/>
                                <span>entre em contato</span>
                            </button>
                        </a>
                        <a href="#" className={styles.footerButton}>
                            <button >
                                <img src={contact_img2} alt="icone de phone"/>
                                <span>fale com o nosso<br/>consultor online</span>
                            </button>
                        </a>
                    </div>
                    <div id={styles.corebiz_vtex_imgs}>
                        <div>
                            <span>Created by</span>
                            <img src={createdBy_img} alt="imagem de rodape corebiz"/>
                        </div>
                        <div>
                            <span>Powered by</span>
                            <img src={poweredBy_img} alt="imagem de rodape vtex"/>
                        </div>
                    </div>
                </div>
                
            </footer>
        </div>
    )
}

export default Footer;