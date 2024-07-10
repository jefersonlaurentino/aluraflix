import Campo_input from "../Campo_input";
import Select from "../Select";
import Textarea from "../TextArea";
import Button from "../Button";
import "./modal.css";
import { RxCrossCircled } from "react-icons/rx";
import { useState , useContext, useEffect} from "react";
import userContext from "../context/contador";
import loadapi from "../context/loadapi";

const api = async (id) =>{
    return await fetch(`http://localhost:3000/videos?id=${id}`)
    .then(res => res.json())
    .catch(err=> console.log(err))
}

const editApi = (id , titulo , imagen , video , time , descricao) =>{
    fetch(`http://localhost:3000/videos/${id}` , {
        method: "PuT",
        headers: {
            "content-type": "application/josn",
        },
        body: JSON.stringify({
            titulo,
            imagen,
            video,
            time,
            descricao
        })
    })
    .then((res) =>res.json())
    .catch((erro)=> console.log(erro));
}


const Modal = (props) =>{
    const modalNone = () =>{
        document.querySelector(".div_modal").style.display = "none"
    }

    const times = [
        "FRONT END",
        "BACK END",
        "MOBILE"
    ]

    const editVideo = (evt) =>{
        evt.preventDefault()
        editApi(contador , titulo , imagen , video , time , descricao)
        modalNone()
        setLoadApi(itens=> itens+1)
        dely()
    }

    const dely = () =>{
        setTimeout(()=>setLoadApi(itens=> itens+1),100)
    }

    const clearInputModal = ()=>{
        setImagen('')
        setTitulo('')
        setTime('')
        setVideo('')
        setDescricao("")
    }

    const { setLoadApi } = useContext(loadapi)
    const { contador } = useContext(userContext)

    const [ titulo , setTitulo ] = useState("")
    const [ imagen , setImagen ] = useState("")
    const [ video , setVideo ] = useState("")
    const [ time , setTime ] = useState("")
    const [ descricao , setDescricao ] = useState("")

    const consunoApi = async(contador) =>{
        if (contador) {
            let Api = await api(contador) 
            setTimeout(()=>{setTitulo(Api[0].titulo)
            setImagen(Api[0].imagen)
            setVideo(Api[0].video)
            setTime(Api[0].time)
            setDescricao(Api[0].descricao)},100)
        }
    }
    
    useEffect(()=>{
        consunoApi(contador)
    },[contador])

    return (
        <div className="div_modal" style={props.display}>
            <section>
                <div className="voltar">
                    <button onClick={modalNone} >
                        <RxCrossCircled/>
                    </button>
                </div>
                <form onSubmit={editVideo}>
                    <h4>Editar vídeo</h4>
                    <Campo_input 
                        obrigatorio
                        label="Título"
                        value={titulo}
                        aoAlterado={value => setTitulo(value)} ></Campo_input>
                    <Select  
                        obrigatorio
                        itens={times}
                        label="categoria" 
                        valor={time}
                        aoAlterado={value => setTime(value)}
                    ></Select>
                    <Campo_input label="Imagem"
                        value={imagen} 
                        obrigatorio
                        aoAlterado={value => setImagen(value)} ></Campo_input>
                    <Campo_input label="Vídeo"
                        value={video} 
                        obrigatorio
                        aoAlterado={value => setVideo(value)} ></Campo_input>
                    <Textarea label="Descrição"
                        value={descricao} 
                        aoAlterado={value => setDescricao(value)} ></Textarea>
                    <div className="div__button">
                        <Button>Gurdar</Button>
                        <Button click={clearInputModal} type="reset">Limpar</Button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Modal;