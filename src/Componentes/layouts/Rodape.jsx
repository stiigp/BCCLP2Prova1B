import { Alert } from "react-bootstrap";
export default function Rodape(props) {

    return (

        <footer className="footer">
            <Alert className={"text-center"} variant="light">
                <h6>
                    {props.informacoes || "Informações não fornecidas."}
                </h6>
            </Alert>
        </footer>
    );  
}