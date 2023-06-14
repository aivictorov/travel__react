import './HotelOverview.scss';

const HotelOverview = () => {
    return (
        <section className="hotel-overview">
            <h2 className="hotel-overview__title">Overview</h2>
            <div className="hotel-overview__text">
                <p>
                    Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park
                    Bosphorus Hotel Istanbul has risen from the ashes of the historic
                    Park Hotel, which also served as Foreign Affairs Palace 120 years
                    ago and is hosting its guests by assuming this hospitality
                    mission. With its 452 luxurious rooms and suites, 8500 m2 SPA and
                    fitness area, 18 meeting rooms including 4 dividable ones and 3
                    terraces with Bosphorus view, Istanbuls largest terrace with
                    Bosphorus view (4500 m2) and latest technology infrastructure, CVK
                    Park Bosphorus Hotel Istanbul is destined to be the popular
                    attraction point of the city. Room and suite categories at various
                    sizes with city and Bosphorus view, as well as 68 separate luxury
                    suites, are offered to its special guests as a wide variety of
                    selection.
                </p>
            </div>
            <ul className="hotel-overview__badge-list">
                <li className="hotel-overview__first-badge">
                    <div className="hotel-overview__first-badge-rating">4.2</div>
                    <div className="hotel-overview__first-badge-text">
                        <span>Very good</span>
                        <span>371 reviews</span>
                    </div>
                </li>
                <li className="hotel-overview__next-badge">
                    <div className="hotel-overview__next-badge-icon">
                        <svg width={32} height={32}>
                            <use href="#stars-icon" />
                        </svg>
                    </div>
                    <div className="hotel-overview__next-badge-text">Near park</div>
                </li>
                <li className="hotel-overview__next-badge">
                    <div className="hotel-overview__next-badge-icon">
                        <svg width={32} height={32}>
                            <use href="#stars-icon" />
                        </svg>
                    </div>
                    <div className="hotel-overview__next-badge-text">
                        Near nightlife
                    </div>
                </li>
                <li className="hotel-overview__next-badge">
                    <div className="hotel-overview__next-badge-icon">
                        <svg width={32} height={32}>
                            <use href="#stars-icon" />
                        </svg>
                    </div>
                    <div className="hotel-overview__next-badge-text">
                        Near theater
                    </div>
                </li>
                <li className="hotel-overview__next-badge">
                    <div className="hotel-overview__next-badge-icon">
                        <svg width={32} height={32}>
                            <use href="#stars-icon" />
                        </svg>
                    </div>
                    <div className="hotel-overview__next-badge-text">Clean Hotel</div>
                </li>
            </ul>
        </section>
    );
}

export default HotelOverview;