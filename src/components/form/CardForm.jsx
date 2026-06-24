import Label from '../input/Label'
import Input from '../input/Input'
import './CardForm.css'
import { Link } from 'react-router-dom'
import { Btn } from '../Btn/Btn-props'
import Logo from '../../assets/images/logo-girassol.png'

function CardForm() {
  return (
    <div className="cardPage">
      <div className="cardContainer">
        <div className="cardPanel">
          <img src={Logo} alt="Logo do Pixel Plant" className="formLogo" />

          <h1 className="text">Create account</h1>

          <div className="inputGroup">
            <Label id="fullName" text="Name" />
            <Input type="text" placeholder="Name" id="fullName" name="fullName" />

            <Label id="email" text="E-mail" />
            <Input type="email" placeholder="E-mail" id="email" name="email" />

            <Label id="password" text="Password" />
            <Input type="password" placeholder="Password" id="password" name="password" />
          </div>

          <Link to="/login" className="links">
            Already have an account? <span className="linkHighlight">sign in!</span>
          </Link>

          <Btn text="Register" className="btnRegister" />
        </div>

        <div className="cardVisual" />
      </div>
    </div>
  );
}

export default CardForm;