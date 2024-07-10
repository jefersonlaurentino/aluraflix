import style from "./rodape.module.css"
import logo from "../../images/LogoMain.png";

export default function Rodape() {
    return (
        <footer className={style.footer}>
            <img src={logo} ></img>
        </footer>
    )
}