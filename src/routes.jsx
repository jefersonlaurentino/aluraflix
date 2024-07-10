import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./containers/Home/index";
import Addvideo from "./containers/Addvideo";
import Cabecalho from "./containers/Cabecalho";
import Cabecalho_phone from "./containers/Cabecalho_phone";
import Rodape from "./containers/Rodape";
import useContext from "./containers/context";
import useContador from "./containers/context/contador";
import loadapi from "./containers/context/loadapi";
import useClick from "./containers/context/click.jsx";
import { useState } from "react";



function Approutes() {

    const [cardsAdicionados , setCardsAdicionados] = useState([])
    const [ contador , setContador ] = useState("")
    const [ loadApi , setLoadApi ] = useState(0)
    const [ click , setClick ] = useState(0)

    return (
        <BrowserRouter>
            
            {/* <useContext.Provider value={{cardsAdicionados , setCardsAdicionados}}> */}
                <useContador.Provider value={{contador , setContador}}>
                    <loadapi.Provider value={{loadApi , setLoadApi }}>
                        <useClick.Provider value={{click , setClick }}>
                            <Cabecalho></Cabecalho>
                            <Cabecalho_phone></Cabecalho_phone>
                        </useClick.Provider>
                        <Routes>
                            <Route path="/" element={<Home/>} ></Route>
                            <Route path="/novovideo" element={<Addvideo/>} ></Route>
                        </Routes>
                    </loadapi.Provider>
                </useContador.Provider>
            {/* </useContext.Provider> */}
            <Rodape></Rodape>
        </BrowserRouter>
    )
}

export default Approutes;