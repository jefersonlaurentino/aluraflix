import { Link } from "react-router-dom";

export default function CabecalhoLink({url , children , className , click}) {
    return (
        <Link onClick={click} to={url} className={className}>
            { children }
        </Link>
    )
}