import './HotelLocation.scss';

const HotelLocation = ({address}) => {
    return (

        <section className="hotel-location">
            <div className="hotel-location__header">
                <h2 className="hotel-location__title">Location/Map</h2>
                <button className="button button--bold" type="button">
                    View on google maps
                </button>
            </div>
            <div className="hotel-location__map">
                <img src="./img/hotels/map.jpg" alt="map" />
            </div>
            <div className="location">
                <div className="location__icon">
                    <svg width={18} height={18}>
                        <use href="#location" />
                    </svg>
                </div>
                <a className="location__link" href="#!">
                    {address}
                </a>
            </div>
        </section>
    );
}

export default HotelLocation;