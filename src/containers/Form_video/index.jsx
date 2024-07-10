import { useState , useContext} from "react";
import Button from "../Button";
import Campo_input from "../Campo_input";
import Select from "../Select";
import TextArea from "../TextArea";
import "./Form.css";



const  Form_video = (props) =>{

    const times = [
        "FRONT END",
        "BACK END",
        "MOBILE"
    ]

    const createVideo = ( titulo , time, imagen , video , descricao ) =>{
        fetch("http://localhost:3000/videos" , {
            method: "POST",
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

    const [ titulo , setTitulo ] = useState("")
    const [ imagen , setImagen ] = useState("")
    const [ video , setVideo ] = useState("")
    const [ time , setTime ] = useState("")
    const [ descricao , setDescricao ] = useState("")

    const aoEnviar = (evt) =>{
        evt.preventDefault()
        createVideo(titulo, time , imagen , video , descricao)
        setTitulo("")
        setImagen("")
        setVideo("")
        setTime("")
        setDescricao("")
    }

    return (
        <main>
            <h1>Novo vídeo</h1>
            <p>Complete el formulario para crear una nueva tarjeta de video</p>
            <form className="form" onSubmit={aoEnviar}>
                <h2>creat</h2>
                <div className="campo_desk">
                    <Campo_input 
                        obrigatorio 
                        value={titulo}
                        aoAlterado={value => setTitulo(value)}
                        label="Título" 
                        placeholder="Título do vídeo" 
                    />
                    <Select 
                        obrigatorio 
                        valor={time}
                        aoAlterado={value =>setTime(value)}
                        label="Categoria" 
                        itens={times}
                    />
                </div>
                <div className="campo_desk">
                    <Campo_input 
                        value={imagen}
                        aoAlterado={value => setImagen(value)}
                        obrigatorio label="Imagem" 
                        placeholder="Link da imagem" 
                    />
                    <Campo_input 
                        value={video}
                        aoAlterado={value => setVideo(value)}
                        obrigatorio 
                        label="Vídeo" 
                        placeholder="Link do vídeo" 
                    />
                </div>
                <TextArea 
                    label="Descrição"
                    value={descricao}
                    aoAlterado={value=>setDescricao(value)}
                    placeholder="De que se trata este vídeo?"
                />
                <div className="div_button">
                    <Button>
                        Guardar
                    </Button>
                    <Button type="reset">
                        Limpar
                    </Button>
                </div>
            </form>
        </main>
    )
}

export default Form_video;