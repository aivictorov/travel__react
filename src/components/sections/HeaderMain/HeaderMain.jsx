import './HeaderMain.scss';
import HeaderNav from '../../blocks/HeaderNav/HeaderNav';
import HeaderMainSearchForm from './HeaderMainSearchForm';

const Header = () => {
    return (
        <header className="header">
            <div className="bg-wrapper">
                <div className="header__bg">
                    <HeaderNav
                        style=""
                        btnStyle="light"
                    />
                    <div className="header__content">
                        <div className="container">
                            <div className="header__subtitle">Helping Others</div>
                            <h1 className="header__title">Live &amp; Travel</h1>
                            <div className="header__text">Special offers to suit your plan</div>
                        </div>
                    </div>
                </div>
            </div>
            <form className="header__form-wrapper">
                <div className="container">
                    <HeaderMainSearchForm />
                </div>
            </form>
        </header>
    );
}

export default Header;