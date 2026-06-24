import Header from '../components/Header/Header'
import { BtnEntrar } from "../components/Btn/Btn-entrar"
import './LandingPage.css'
import '../styles/variables.css'

function LandingPage() {
    return (
        <>
        <Header/>
        <div className='hero-content'>
            <h1 className='heroTitle'>Organize sua coleção de plantas</h1>
            <h3 className='heroSubtitle'>Cadastre suas espécies, monitore os cuidados diários e mantenha suas plantas crescendo saudáveis</h3>
                <div className='heroButtonWrapper'>
                    <BtnEntrar/>
                </div>
        </div>

        </>
    );
}

export default LandingPage;