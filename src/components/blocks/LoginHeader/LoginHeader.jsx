import './LoginHeader.scss';

const LoginHeader = () => {
    return (
        <div className="login-header">
            <h1 className="login-header__title">Login</h1>
            <div className="login-header__text">
                Login to access your Golobe account
            </div>
        </div>
    );
}

export default LoginHeader;