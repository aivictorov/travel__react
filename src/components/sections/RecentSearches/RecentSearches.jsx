import './RecentSearches.scss'
import recentSearchImg01 from './../../../img/sections/recent-searches/01.jpg';
import recentSearchImg02 from './../../../img/sections/recent-searches/02.jpg';
import recentSearchImg03 from './../../../img/sections/recent-searches/03.jpg';
import recentSearchImg04 from './../../../img/sections/recent-searches/04.jpg';

const RecentSearches = () => {
    return (
        <section className="recent-searches">
            <div className="container">
                <div className="section-header">
                    <div className="section-header__left">
                        <h2 className="section-header__title">Your recent searches</h2>
                    </div>
                    <div className="section-header__right"></div>
                </div>
                <div className="recent-searches__cards">
                    <div className="recent-search-card">
                        <div className="recent-search-card__image">
                            <img
                                src={recentSearchImg01}
                                alt="Istanbul, Turkey"
                            />
                        </div>
                        <div className="recent-search-card__content">
                            <div className="recent-search-card__title">Istanbul, Turkey</div>
                            <div className="recent-search-card__subtitle">325 places</div>
                        </div>
                    </div>
                    <div className="recent-search-card">
                        <div className="recent-search-card__image">
                            <img
                                src={recentSearchImg02}
                                alt="Sydney, Australia"
                            />
                        </div>
                        <div className="recent-search-card__content">
                            <div className="recent-search-card__title">Sydney, Australia</div>
                            <div className="recent-search-card__subtitle">325 places</div>
                        </div>
                    </div>
                    <div className="recent-search-card">
                        <div className="recent-search-card__image">
                            <img
                                src={recentSearchImg03}
                                alt="Baku, Azerbaijan"
                            />
                        </div>
                        <div className="recent-search-card__content">
                            <div className="recent-search-card__title">Baku, Azerbaijan</div>
                            <div className="recent-search-card__subtitle">325 places</div>
                        </div>
                    </div>
                    <div className="recent-search-card">
                        <div className="recent-search-card__image">
                            <img
                                src={recentSearchImg04}
                                alt="Malé, Maldives"
                            />
                        </div>
                        <div className="recent-search-card__content">
                            <div className="recent-search-card__title">Malé, Maldives</div>
                            <div className="recent-search-card__subtitle">325 places</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RecentSearches;