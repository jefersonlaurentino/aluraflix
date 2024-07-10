import { IoHomeOutline } from "react-icons/io5";
import CabecalhoLink from "../CabecalhoLink";
import { IoMdAddCircleOutline } from "react-icons/io";
import style from "./style.module.css"
import { useState , useEffect, useContext } from "react"; 
import useClick from "../context/click"

export default function Cabecalho_phone() {
    let localiza = document.location.pathname
    const { click , setClick } = useContext(useClick)
    
    useEffect(()=>{
        localiza = document.location.pathname
    },[click])
    
    const localPag = () =>{
        setClick(itens=>itens+1)
    }

    return (
        <div>
            <header className={style.phone}>
                <nav>
                    <CabecalhoLink click={localPag} url="/" className={`${style.link_phone} ${(localiza == '/') ? style.link_phone_selected : ''}`}>
                        <IoHomeOutline/>
                    </CabecalhoLink>
                    <CabecalhoLink click={localPag} url="/novovideo" className={`${style.link_phone} ${(localiza == '/novovideo') ? style.link_phone_selected_video : ''}`}>
                        <IoMdAddCircleOutline/>
                    </CabecalhoLink>
                </nav>
            </header>
        </div>
    )
}