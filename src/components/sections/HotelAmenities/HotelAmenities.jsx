import './HotelAmenities.scss';

const HotelAmenities = () => {
    return (
        <section className="hotel-amenities">
            <h2 className="hotel-amenities__title">Amenities</h2>
            <ul className="hotel-amenities__list" style={{ maxHeight: 240 }}>
                <li className="hotel-amenities__item">
                    <div className="hotel-amenities__item-icon">
                        <svg width={24} height={24}>
                            <use href="#food" />
                        </svg>
                    </div>
                    <div className="hotel-amenities__item-title">Outdoor pool</div>
                </li>
                <li className="hotel-amenities__item">
                    <div className="hotel-amenities__item-icon">
                        <svg width={24} height={24}>
                            <use href="#wifi" />
                        </svg>
                    </div>
                    <div className="hotel-amenities__item-title">Fitness center</div>
                </li>
                <li className="hotel-amenities__item">
                    <div className="hotel-amenities__item-icon">
                        <svg width={24} height={24}>
                            <use href="#seat" />
                        </svg>
                    </div>
                    <div className="hotel-amenities__item-title">Indoor pool</div>
                </li>
                <li className="hotel-amenities__item">
                    <div className="hotel-amenities__item-icon">
                        <svg width={24} height={24}>
                            <use href="#food" />
                        </svg>
                    </div>
                    <div className="hotel-amenities__item-title">Bar/Lounge</div>
                </li>
                <li className="hotel-amenities__item">
                    <div className="hotel-amenities__item-icon">
                        <svg width={24} height={24}>
                            <use href="#wifi" />
                        </svg>
                    </div>
                    <div className="hotel-amenities__item-title">
                        Spa and wellness center
                    </div>
                </li>
                <li className="hotel-amenities__item">
                    <div className="hotel-amenities__item-icon">
                        <svg width={24} height={24}>
                            <use href="#food" />
                        </svg>
                    </div>
                    <div className="hotel-amenities__item-title">Free Wi-Fi</div>
                </li>
                <li className="hotel-amenities__item">
                    <div className="hotel-amenities__item-icon">
                        <svg width={24} height={24}>
                            <use href="#wifi" />
                        </svg>
                    </div>
                    <div className="hotel-amenities__item-title">Restaurant</div>
                </li>
                <li className="hotel-amenities__item">
                    <div className="hotel-amenities__item-icon">
                        <svg width={24} height={24}>
                            <use href="#wifi" />
                        </svg>
                    </div>
                    <div className="hotel-amenities__item-title">
                        Tea/coffee machine
                    </div>
                </li>
                <li className="hotel-amenities__item">
                    <div className="hotel-amenities__item-icon">
                        <svg width={24} height={24}>
                            <use href="#wifi" />
                        </svg>
                    </div>
                    <div className="hotel-amenities__item-title">Room service</div>
                </li>
                <li className="hotel-amenities__item">
                    <a className="hotel-amenities__link" href="#!">
                        +24 more
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default HotelAmenities;