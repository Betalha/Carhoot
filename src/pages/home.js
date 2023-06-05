import backgroundImage from '../imgs/fundo_inicio.png';
import personagem from '../imgs/personagem.png';
import "./styles/global.css"
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleRegras = () => {
        navigate('/regras');
    };

    const handleIniciar = () => {
        navigate('/01');    
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
            }}
        >
            <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={personagem} alt="Minha Imagem" />
                    <h1 style={{ fontSize: '128px' }}>Carhoot!</h1>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button className='botoes' onClick={handleIniciar}>
                        INICIAR
                    </button>
                    <button className='botoes' onClick={handleRegras}>
                        REGRAS
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
