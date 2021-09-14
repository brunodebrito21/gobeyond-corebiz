import React,{useRef,useLayoutEffect} from "react"
import i1 from "../assets/slide_imgs/i1.jpg"
import i2 from "../assets/slide_imgs/i2.jpg"
import i3 from "../assets/slide_imgs/i3.jpg"
import i4 from "../assets/slide_imgs/i4.jpg"
import arrow_left from "../assets/slide_imgs/arrow_left.png"
import arrow_right from "../assets/slide_imgs/arrow_right.png"
import styles from "../styles/slide.module.css"

function Slide(){
    const useBall1 = useRef();
    const useBall2 = useRef();
    const useBall3 = useRef();
    const useBall4 = useRef();

    useLayoutEffect(()=>{
        const ball1 = useBall1.current;
        const ball2 = useBall2.current;
        const ball3 = useBall3.current;
        const ball4 = useBall4.current;
    })
    return(
        <>
            <div id={styles.slide}>
                <div id={styles.arrows}>
                    <div>
                        <img src={arrow_left}alt="seta esquerda"/>
                    </div>
                    <div>
                        <img src={arrow_right}alt="seta direita"/>
                    </div>
                </div>
                <div id={styles.balls}>
                    <div ref={useBall1} id={styles.alignCenter}>
                        <div  id={styles.ball1} ></div>
                        <div ref={useBall2} id={styles.ball2} ></div>
                        <div ref={useBall3} id={styles.ball3} ></div>
                        <div ref={useBall4} id={styles.ball4} ></div>
                    </div>
                </div>
                <div id={styles.imgs}>
                    <div className={styles.slide_img}>
                        <img src={i1} alt="imagem 1 do slide"/>
                    </div>
                    <div className={styles.slide_img}>
                        <img src={i2}  alt="imagem 2 do slide"/>
                    </div>
                    <div className={styles.slide_img}>
                        <img src={i3}  alt="imagem 3 do slide"/>
                    </div>
                    <div className={styles.slide_img}>
                        <img src={i4} alt="imagem 4 do slide"/>
                    </div>
                </div>
                
                <div className={styles.slide_text}>
                    <p>Olá, você quer fazer entrar de cabeça em desenvolvimento?<br/>
                        <span><b>front-end • back-end • mobile</b></span>
                    </p>
                </div>
            </div>
        </>
    )
}
export default Slide;