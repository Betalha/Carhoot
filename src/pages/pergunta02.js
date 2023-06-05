import "./styles/global.css";
import backgroundImage from '../imgs/fundo_inicio.png';
import { useNavigate } from 'react-router-dom';
import semaforo from '../imgs/semaforo.png';
import React, { useState, useEffect } from 'react';

function Pergunta02() {

    const navigate = useNavigate();

    const [segundos, setSegundos] = useState(30);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSegundos(segundos => segundos - 1);
        }, 1000);
        if (segundos === 0) {
            navigate('/03');
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [segundos, navigate]);
    const formatarTempo = (tempo) => {
        const minutos = Math.floor(tempo / 60);
        const segundos = tempo % 60;
        return `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    };

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
            <div>
                <h1>{formatarTempo(segundos)}</h1>
            </div>            <div className="pergunta">
                <h3>
                    O que significa a sinalização de trânsito com um círculo vermelho e uma linha diagonal?
                </h3>
                <div className="painel">
                    <img className="semaforo" src={semaforo} alt="Minha Imagem" />
                    <div className="respostas">
                        <div className="resposta01">
                        Proibido estacionar ou parar.
                        </div>
                        <div className="resposta02">
                        Permetido estacionar ou parar.
                        </div>
                        <div className="resposta03">
                        De a preferencia
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Pergunta02;