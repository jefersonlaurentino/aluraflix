import "../Campo_input/input.css"

const Select = (props) =>{
    return (
        <div className="campo_input">
            <label>
                {props.label}
            </label>
            <select value={props.valor} onChange={evt => props.aoAlterado(evt.target.value)} required={props.obrigatorio}>
                <option value="">Escolha uma categoria</option>
                {props.itens.map(itens =>{
                    return <option value={itens} key={itens}>{itens}</option>
                })}
            </select>
        </div>
    )
}

export default Select;