import { Container, Button } from "react-bootstrap";


export default function DetalhesCandidato(props) {

    function registrarQuestionamento(stringQuestionamento) {
        props.setListaCandidatos(props.listaCandidatos.map((candidato) => {
            var meuQuestionamentos = []
            if (candidato.id === props.candidatoSelecionado.id) {
                meuQuestionamentos = candidato.questionamentos
                meuQuestionamentos.push(stringQuestionamento)
                candidato.questionamentos = candidato.questionamentos
            }
            return candidato
       }))
    }
    

    return (
        <Container>
            <h1>Detalhes Candidato</h1>
            <h3>Id: {props.candidatoSelecionado.id}</h3>
            <h3>Nome: {props.candidatoSelecionado.nome}</h3>
            <h3>Email: {props.candidatoSelecionado.email}</h3>
            <h3>Avatar: </h3> <img height="300px" width="300px" src = {props.candidatoSelecionado.avatar}/>
            <h3>Propostas: </h3>
            {props.candidatoSelecionado.propostas.map((proposta) => {
                return (
                    <h5>{proposta}</h5>
                    )
                })}
            <h3>Curtidas: {props.candidatoSelecionado.curtidas}</h3>
            <h3>Descurtidas: {props.candidatoSelecionado.descurtidas}</h3>

            <h3>Questionamentos: </h3>
            {
                props.candidatoSelecionado.questionamentos.map((questionamento) => {
                    return (
                        <h5>{questionamento}</h5>
                        )
                    })
            }
            <input type="text" id="inputQuestionamento"></input> <Button onClick={() => {
                var stringQuestionamento = document.getElementById("inputQuestionamento").value
                registrarQuestionamento(stringQuestionamento)
                document.getElementById("inputQuestionamento").value = ""
            }}>Registrar</Button>
            {/* <Form onSubmit={manipularSubmissao}>
                <Form.Control required type="text" id="descricao"></Form.Control>
                <Button type="submit">Registrar</Button>
            </Form> */}
            <br/>
            
        <Button onClick={() => {props.setDetalharCandidato(false)}}>Voltar</Button>
        </Container>
    );
}