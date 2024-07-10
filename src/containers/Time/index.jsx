import "./Time.css"
import "../Cards/Cards.css"
import Cards from "../Cards"

const Time = (props) =>{

    return (
        <section className="time">
            <div>
                <h3 style={{backgroundColor: props.cor}}>{props.nome}</h3>
            </div>
            <div className="div_cards">
                {props.card.map(itens=> 
                    <Cards 
                        key={itens.titulo}
                        id={itens.id} 
                        cor={props.cor} 
                        img={itens.imagen}
                        titulo={itens.titulo}
                        video={itens.video}
                        descricao={itens.descricao}
                        time={itens.time}
                    />)} 
            </div>
        </section>
    )
}

export default Time;