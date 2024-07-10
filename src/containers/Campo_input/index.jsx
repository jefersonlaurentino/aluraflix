import "./input.css"

const Campo_input = (props)=>{
    const aoDigitado = (evt) =>{
        props.aoAlterado(evt.target.value)
    }
    return (
        <div className="campo_input">
            <label>
                {props.label}
            </label>
            <input onChange={aoDigitado} type="text" 
                placeholder={props.placeholder}
                required={props.obrigatorio} 
                value={props.value}
            />
        </div>
    )
}

export default Campo_input;