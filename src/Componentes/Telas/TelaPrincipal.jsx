import { Container } from "react-bootstrap";
import Pagina from "../layouts/Pagina";
import DetalhesCandidato from "./DetalhesCandidato";
import GridCandidatos from "./GridCandidatos";
import { useState } from "react";
import {listaCandidatosImport} from "../../dados/candidatos";
export default function TelaPrincipal(props) {
    const [detalharCandidato, setDetalharCandidato] = useState(false);
    const [candidatoSelecionado, setCandidatoSelecionado] = useState();
    const [listaCandidatos, setListaCandidatos] = useState(listaCandidatosImport);
    return (

        <Pagina>
            {
                detalharCandidato ? (
                    <DetalhesCandidato setListaCandidatos={setListaCandidatos} listaCandidatos={listaCandidatos} candidatoSelecionado={candidatoSelecionado} setDetalharCandidato={setDetalharCandidato}/>
                ) : (
                    <GridCandidatos listaCandidatos={listaCandidatos} setListaCandidatos={setListaCandidatos} setDetalharCandidato={setDetalharCandidato} setCandidatoSelecionado={setCandidatoSelecionado}/>
                )
            }
        </Pagina>
    );
}