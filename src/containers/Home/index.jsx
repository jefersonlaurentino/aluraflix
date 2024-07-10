import Banner from "../Banner";
import Modal from "../Modal";
import Time from "../Time";
import "../scroll/scroll.css";
import loadapi from "../context/loadapi";
import { useContext, useEffect } from "react";

const listVideos = async() => {
        return await fetch("http://localhost:3000/videos")
            .then((res) => res.json())
            .catch((erro) => console.log(erro))
    }

    let tes = await listVideos()
export default function Home() {

    const times = [
        {
            nome: 'FRONT END',
            cor: '#6BD1FF'
        },
        {
            nome: 'BACK END',
            cor: '#00C86F'
        },
        {
            nome: 'MOBILE',
            cor: '#FFBA05'
        },
    ]
    
    const teste = async() =>{
        tes = await listVideos()
    }

    const { loadApi } = useContext(loadapi)
    useEffect(()=>{
        teste()
    },[loadApi])

    return (
        <>
            <main>
                <Banner></Banner>
                {times.map(time => <Time 
                    key={time.nome} 
                    nome={time.nome} 
                    cor={time.cor}
                    card={tes.filter(itens => itens.time === time.nome)}
                />)}
                <Modal display={{display:"none"}}/>
            </main>
        </>
    )
}