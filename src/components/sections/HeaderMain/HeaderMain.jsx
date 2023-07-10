import './HeaderMain.scss';
import HeaderNav from '../../blocks/HeaderNav/HeaderNav';
import SearchForm from './../../forms/SearchForm/SearchForm';

const Header = () => {
    return (
        <header className="header">
            <div className="bg-wrapper">
                <div className="header__bg">
                    <HeaderNav
                        style="main"
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
            <div className="header__form-wrapper">
                <div className="container">
                    <SearchForm page="home" />
                </div>
            </div>
        </header>
    );
}

export default Header;