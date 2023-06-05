import "./styles/global.css";
import backgroundImage from '../imgs/fundo_inicio.png';
import { useNavigate } from 'react-router-dom';
import semaforo from '../imgs/semaforo.png';
import React, { useState, useEffect } from 'react';

function Pergunta03() {

    const navigate = useNavigate();

    const [segundos, setSegundos] = useState(30);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSegundos(segundos => segundos - 1);
        }, 1000);
        if (segundos === 0) {
            navigate('/');
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
                O que significa uma placa de trânsito com uma bicicleta estilizada?
                </h3>
                <div className="painel">
                    <img className="semaforo" src={semaforo} alt="Minha Imagem" />
                    <div className="respostas">
                        <div className="resposta01">
                        Esportes radicais proximos.
                        </div>
                        <div className="resposta02">
                        Indica uma ciclovia ou presença de ciclistas na área.
                        </div>
                        <div className="resposta03">
                        Proibido andar de bicicleta.
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Pergunta03;