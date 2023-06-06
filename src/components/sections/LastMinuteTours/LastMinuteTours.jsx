import './LastMinuteTours.scss'
import tourImg01 from './../../../img/sections/last-minute-tours/01.jpg';
import tourImg02 from './../../../img/sections/last-minute-tours/02.jpg';
import tourImg03 from './../../../img/sections/last-minute-tours/03.jpg';
import tourImg04 from './../../../img/sections/last-minute-tours/04.jpg';

const LastMinuteTours = () => {
    return (
        <section className="last-minute-tours">
            <div className="container">
                <div className="section-header">
                    <div className="section-header__left">
                        <h2 className="section-header__title">Last minute tours</h2>
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
                <div className="last-minute-tours__content">
                    <div className="last-minute-tours__card">
                        <div className="last-minute-tours__card-header">
                            <div className="last-minute-tours__card-title">
                                Backpacking Sri Lanka
                            </div>
                            <div className="last-minute-tours__card-price">
                                From<span>$700</span>
                            </div>
                        </div>
                        <div className="last-minute-tours__card-text">
                            <p>
                                Traveling is a unique experience as it's the best way to unplug
                                from the pushes and pulls of daily life. It helps us to forget
                                about our problems, frustrations, and fears at home. During our
                                journey, we experience life in different ways. We explore new
                                places, cultures, cuisines, traditions, and ways of living.
                            </p>
                        </div>
                        <div className="last-minute-tours__card-button">
                            <button
                                className="button button--light"
                                type="button"
                                style={{ width: "100%" }}
                            >
                                Book flight
                            </button>
                        </div>
                    </div>
                    <div className="last-minute-tours__gallery">
                        <div className="last-minute-tours__image">
                            <img
                                src={tourImg01}
                                alt="Backpacking Sri Lanka"
                            />
                        </div>
                        <div className="last-minute-tours__image">
                            <img
                                src={tourImg02}
                                alt="Backpacking Sri Lanka"
                            />
                        </div>
                        <div className="last-minute-tours__image">
                            <img
                                src={tourImg03}
                                alt="Backpacking Sri Lanka"
                            />
                        </div>
                        <div className="last-minute-tours__image">
                            <img
                                src={tourImg04}
                                alt="Backpacking Sri Lanka"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LastMinuteTours;