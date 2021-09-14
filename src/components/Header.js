import React,{useRef,useLayoutEffect} from "react"
import styles from "../styles/header.module.css"
import lupa from "../assets/header_imgs/lupa.png"
import head_login from "../assets/header_imgs/head_img.png"
import body_login from "../assets/header_imgs/body_img.png"
import cart_img from "../assets/header_imgs/cart.png"
import elipse from "../assets/header_imgs/addictioned_product_quantity.png"
import arrow_cat1 from "../assets/header_imgs/arrow_categories.png"
import arrow_cat2 from "../assets/header_imgs/arrow_categories.png"


function Header(){
    const menuRef = useRef();
    const navRef = useRef();
    
    useLayoutEffect(()=>{
        var menu  = menuRef.current
        var nav = navRef.current
        function openMobileMenu(){
            nav.classList.toggle("togleMobileMenu")
            console.log("clicou")
        }
        menu.addEventListener("click",openMobileMenu)
    })
    
    

    
    return(
        <>
            <header>
                <div id={styles.container}>
                    <div ref={menuRef} className={styles.mobileButtonMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div id={styles.logo}>
                        <div id={styles.img_logo_1}></div>
                        <div id={styles.img_logo_2}></div>
                    </div>
                    <nav ref={navRef}>
                        <a href="#" >Home</a>
                        <a href="#">Categoria 1<span className={styles.space_arrow_img_categories}><img src={arrow_cat1} alt="seta categoria 1"/></span></a>
                        <a href="#" >Categoria 2<span className={styles.space_arrow_img_categories}><img src={arrow_cat2} alt="seta categoria 2"/></span></a>
                        <a href="#" >Contato</a>
                    </nav>
                    <div id={styles.search}>
                        <input type="text" placeholder="O que está procurando?"></input>
                        <img src={lupa} alt="imagem de lupa"></img>
                    </div>
                    <div id={styles.account}>
                        <div id={styles.login_icon}>
                            <img  src={head_login} width="8.67" height="8.67" alt="icone de login"/>
                            <img src={body_login} alt="icone de login"/>
                        </div>
                        <span>Minha Conta</span>
                    </div>
                    <div id={styles.cart}>
                            <img src={elipse} width="14px" height="14px" alt="items no carrinho"/>
                            <img src={cart_img}  alt="icone do carrinho de compras"/>
                    </div>
                </div>
            </header>
        </>

    )
}

export default Header;