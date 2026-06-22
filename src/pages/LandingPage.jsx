import Header from '../components/Header/Header'
import './LandingPage.css'
import '../styles/variables.css'

function LandingPage() {
    return (
        <>
        <Header></Header>
        <div className='hero-content'>
            <h1>Organize sua coleção de plantas</h1>
            <h3>Cadastre suas espécies, monitore os cuidados diários e mantenha suas plantas crescendo saudáveis</h3>
        </div>
        </>
    );
}

export default LandingPage;