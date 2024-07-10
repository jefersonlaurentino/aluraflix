import "../Campo_input/input.css"

const TextArea = (props) =>{
    return (
        <div className="campo_input">
            <label>
                {props.label}
            </label>
            <textarea 
                onChange={evt => props.aoAlterado(evt.target.value)}
                placeholder={props.placeholder}
                required={props.obrigatorio} 
                value={props.value}
            ></textarea>
        </div>
    )
}

export default TextArea;