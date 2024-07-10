import { Link } from "react-router-dom";
import logo from "../../images/LogoMain.png";
import CabecalhoLink from "../CabecalhoLink";
import style from "./style.module.css"
import { useContext, useEffect, useState } from "react";
import loadapi from "../context/loadapi";
import useClick from "../context/click"


export default function Cabecalho() {
    let localiza = document.location.pathname
    const { click , setClick } = useContext(useClick)
    
    useEffect(()=>{
        localiza = document.location.pathname
    },[click])
    
    const localPag = () =>{
        setClick(itens=>itens+1)
    }

    const { setLoadApi } = useContext(loadapi)
    
    return (
        <header className={style.cabecalho} >
            <Link to="/">
                <img src={logo} alt="Logo da aluraflix" />
            </Link>
            <nav>
                <CabecalhoLink click={() => {
                    localPag()
                    setTimeout(()=>{
                        setLoadApi(itens => itens+1 )
                    },100)
                }} url="/" className={`${style.link} ${(localiza == '/')? style.link_selected : ''}`}>
                    Home
                </CabecalhoLink>
                <CabecalhoLink click={()=>{
                    localPag()
                    }} url="/novovideo" className={`${style.link} ${(localiza == '/novovideo')? style.link_selected: ''}`}>
                    Novo Vídeo
                </CabecalhoLink>
            </nav>
        </header>
    )
}