import "./Cards.css"
import Button from "../Button"
import { RiDeleteBin6Line } from "react-icons/ri";
import { SlPencil } from "react-icons/sl";
import { useContext } from "react";
import userContext from "../context/contador";
import loadapi from "../context/loadapi";

const Cards = (props) =>{
    const { setContador } = useContext(userContext)

    const modal = (id)=>{
        setContador(id)
        document.querySelector(".div_modal").style.display = "block"
    }

    const deleteVideo = (id) =>{
        fetch(`http://localhost:3000/videos/${id}`,{
        method: "DELETE",
        })
        setLoadApi(itens => itens+1 )
        dis()
    }
    
    const dis = () =>{
        setTimeout(()=>setLoadApi(itens => itens+1 ),100)
    }

    const { setLoadApi } = useContext(loadapi)

    return (
        <article className="card" id={props.id} style={{boxShadow: `inset 0 0 5px 3px ${props.cor}`}}>
            <div className="card_img">
                <div style={{boxShadow: `inset 0 0 10px 10px ${props.cor}`}}></div>
                <img src={props.img} alt={`imagen do vídeo de ${props.titulo}`} />
            </div>
            <div className="button_card">
                <Button click={(e)=> deleteVideo(e.target.parentNode.parentNode.id)}>
                    <RiDeleteBin6Line/> Deletar
                </Button>
                <Button click={(e)=> {modal(e.target.parentNode.parentNode.id)}}>
                    <SlPencil/> Editar
                </Button>
            </div>
        </article>
    )
}

export default Cards;