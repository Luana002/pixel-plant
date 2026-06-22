import "./Header.css";
import { Btn } from '../Btn/Btn-props';
import logo from '../../assets/images/logo-girassol.png';

function Header() {
    const handleLogin = () => {
        console.log("Open login");
    };

    const handleSignup = () => {
        console.log("Open signup");
    }

    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="sunflower logo" className="logo-sunflower" />
            </div> 

            <div className="header-actions">
                <Btn text="Login" onClick={handleLogin} className="btn-login" />
                <Btn text="Criar conta" onClick={handleSignup} className="btn-create-account" />
            </div>
        </header>
    );
}

export default Header;