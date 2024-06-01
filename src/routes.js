import React from "react";
import  {BrowserRouter,Routes ,Route}  from "react-router-dom";
import Cadastrar from './App'
import EditarEndereco from './EditarEndereco'

function Rotas(){
    return(
        <BrowserRouter>
        
        <Routes>
            <Route path="/" element={<Cadastrar/>}/>
            <Route path="/editar" element={<EditarEndereco/>} />

        </Routes>
        </BrowserRouter>
    )
}

export default Rotas