import './FallIntoTravel.scss';
import travelImg01 from './../../../img/sections/fall-into-travel/01.jpg';
import travelImg02 from './../../../img/sections/fall-into-travel/02.jpg';
import travelImg03 from './../../../img/sections/fall-into-travel/03.jpg';
import travelImg04 from './../../../img/sections/fall-into-travel/04.jpg';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../../App';

const FallIntoTravel = () => {
    const { setSearchParams } = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <section className="fall-into-travel">
            <div className="container">
                <div className="section-header">
                    <div className="section-header__left">
                        <h2 className="section-header__title">Fall into travel</h2>
                        <div className="section-header__subtitle">
                            Going somewhere to celebrate this season? Whether you’re going
                            home or somewhere to roam, we’ve got the travel tools to get you
                            to your destination.
                        </div>
                    </div>
                    <div className="section-header__right">
                        <button className="button button--border button--h40" type="button">
                            See All
                        </button>
                    </div>
                </div>
                <div className="fall-into-travel__cards">
                    <div className="fall-into-travel-card">
                        <img src={travelImg01} alt="Melbourne" />
                        <div className="fall-into-travel-card__content">
                            <div className="fall-into-travel-card__header">
                                <div className="fall-into-travel-card__header-left">
                                    <div className="fall-into-travel-card__title">Melbourne</div>
                                    <div className="fall-into-travel-card__subtitle">
                                        An amazing journey
                                    </div>
                                </div>
                                <div className="fall-into-travel-card__header-right">
                                    <div className="fall-into-travel-card__price">$700</div>
                                </div>
                            </div>
                            <button
                                className="button"
                                type="button"
                                onClick={() => {
                                    setSearchParams({ from: 'Melbourne' });
                                    navigate("/flight-listing");
                                }}
                            >
                                Book flight
                            </button>
                        </div>
                    </div>
                    <div className="fall-into-travel-card">
                        <img src={travelImg02} alt="Paris" />
                        <div className="fall-into-travel-card__content">
                            <div className="fall-into-travel-card__header">
                                <div className="fall-into-travel-card__header-left">
                                    <div className="fall-into-travel-card__title">Paris</div>
                                    <div className="fall-into-travel-card__subtitle">
                                        A Paris Adventure
                                    </div>
                                </div>
                                <div className="fall-into-travel-card__header-right">
                                    <div className="fall-into-travel-card__price">$600</div>
                                </div>
                            </div>
                            <button className="button" type="button">
                                Book flight
                            </button>
                        </div>
                    </div>
                    <div className="fall-into-travel-card">
                        <img src={travelImg03} alt="London" />
                        <div className="fall-into-travel-card__content">
                            <div className="fall-into-travel-card__header">
                                <div className="fall-into-travel-card__header-left">
                                    <div className="fall-into-travel-card__title">London</div>
                                    <div className="fall-into-travel-card__subtitle">
                                        London eye adventure
                                    </div>
                                </div>
                                <div className="fall-into-travel-card__header-right">
                                    <div className="fall-into-travel-card__price">$350</div>
                                </div>
                            </div>
                            <button className="button" type="button">
                                Book flight
                            </button>
                        </div>
                    </div>
                    <div className="fall-into-travel-card">
                        <img src={travelImg04} alt="Columbia" />
                        <div className="fall-into-travel-card__content">
                            <div className="fall-into-travel-card__header">
                                <div className="fall-into-travel-card__header-left">
                                    <div className="fall-into-travel-card__title">Columbia</div>
                                    <div className="fall-into-travel-card__subtitle">
                                        Amazing streets
                                    </div>
                                </div>
                                <div className="fall-into-travel-card__header-right">
                                    <div className="fall-into-travel-card__price">$700</div>
                                </div>
                            </div>
                            <button className="button" type="button">
                                Book flight
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FallIntoTravel;