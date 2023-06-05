import "./styles/global.css";
import backgroundImage from '../imgs/fundo_inicio.png';
import { useNavigate } from 'react-router-dom';


function Regras() {

    const navigate = useNavigate();

    const handleVoltar = () => {
        navigate('/');
    }

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', // Centralizar horizontalmente
                alignItems: 'center', // Centralizar verticalmente
            }}>

            <div className="regras">
                <h3>
                    O jogo consiste em uma série de perguntas relacionadas ao trânsito. Cada vez que um jogador escolher uma resposta incorreta, ele recebe uma multa, simulando as consequências das respostas erradas no mundo real.
                </h3>
                <h3>
                    No jogo, os jogadores são eliminados progressivamente à medida que acumulam multas por escolherem respostas incorretas às perguntas sobre trânsito. Aquele que conseguir evitar ser eliminado e permanecer até o final, quando todos os outros jogadores foram eliminados, é declarado o vencedor do jogo. Portanto, o vencedor é quem sobrar no final após a eliminação de todos os outros jogadores ao longo das partidas.
                </h3>
            </div>

            <button onClick={handleVoltar} className="botoes">
                Voltar
            </button>

        </div >
    );
}

export default Regras;