import "./Header.css";
import { Btn } from '../Btn/Btn-props';
import logo from '../../assets/images/logo-girassol.png';
import {useNavigate} from "react-router-dom"

function Header() {
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log("Open login");
        
        navigate("/login");
    };

    const handleSignup = () => {
        console.log("Open signup");

        navigate("/register")
    }

    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="sunflower logo" className="logoSunflower" />
            </div> 

            <div className="header-actions">
                <Btn text="Login" onClick={handleLogin} className="btnLogin" />
                <Btn text="Criar conta" onClick={handleSignup} className="btnCreateAccount" />
            </div>
        </header>
    );
}

export default Header;