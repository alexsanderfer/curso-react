export default function ComParam(props) {
    const status = props.nota >= 7 ? 'aprovado' : 'em recuperação'
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>O aluno {props.aluno} tem nota {props.nota} e está {status}</h3>
        </div>
    )
}