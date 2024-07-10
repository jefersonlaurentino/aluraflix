import "./button.css"

const Button = ({children, type , click , nome}) =>{
    return (
        <button name={nome} onClick={click} className="button" type={type}>
            { children }
        </button>
    )
}

export default Button;