import './HeaderInner.scss';
import HeaderNav from '../../blocks/HeaderNav/HeaderNav';

const HeaderInner = () => {
    return (
        <header className="header-inner">
            <div className="container">
                <HeaderNav
                    style="inner-page"
                />
            </div>
        </header>
    );
}

export default HeaderInner;