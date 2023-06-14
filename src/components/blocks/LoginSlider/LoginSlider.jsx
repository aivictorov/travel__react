import './LoginSlider.scss';
import loginImg from './../../../img/login/slider/01.jpg';

const LoginSlider = () => {
    return (
        <div className="login-slider">
            <img src={loginImg} alt="login" />
        </div>
    );
}

export default LoginSlider;