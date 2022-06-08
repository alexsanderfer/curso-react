import React from "react";
import ComParam from "./components/basicos/ComParam";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import './App.css';

export default () => (
    <div className="App">
        <div className="Cards">
            <h1>Fundamentos React</h1>
            <Card titulo="#03 - Desafio Aleatório">
                <Aleatorio min={1} max={10}></Aleatorio>
            </Card>

            <Card titulo="#02 - Fragmento">
                <Fragmento/>
            </Card>

            <Card titulo="#01 - Com Parâmetros">
                <ComParam titulo="Situação do Aluno" aluno="Pedro" nota={9.3}/>
            </Card>
        </div>
    </div>
);
