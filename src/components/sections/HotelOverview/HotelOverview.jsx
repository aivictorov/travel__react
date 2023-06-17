import './HotelOverview.scss';

const HotelOverview = ({description}) => {
    return (
        <section className="hotel-overview">
            <h2 className="hotel-overview__title">Overview</h2>
            <div className="hotel-overview__text">
                {description}
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