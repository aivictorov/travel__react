import './HotelRooms.scss';

const HotelRooms = () => {
    return (

        <section className="hotel-rooms">
            <h2 className="hotel-rooms__title">Available rooms</h2>
            <ul className="hotel-rooms__list">
                <li className="hotel-rooms__item">
                    <div className="hotel-rooms__item-left">
                        <div className="hotel-rooms__item-image">
                            <img
                                src="./img/hotels/hotel-example-1/rooms/01.jpg"
                                alt="available room"
                            />
                        </div>
                        <div className="hotel-rooms__item-title">
                            Superior room - 1 double bed or 2 twin beds
                        </div>
                    </div>
                    <div className="hotel-rooms__item-right">
                        <div className="hotel-rooms__item-price">
                            {" "}
                            <span>$240</span>/night
                        </div>
                        <button
                            className="button button--bold"
                            type="button"
                            style={{ width: 150 }}
                        >
                            Book now
                        </button>
                    </div>
                </li>
                <li className="hotel-rooms__item">
                    <div className="hotel-rooms__item-left">
                        <div className="hotel-rooms__item-image">
                            <img
                                src="./img/hotels/hotel-example-1/rooms/02.jpg"
                                alt="available room"
                            />
                        </div>
                        <div className="hotel-rooms__item-title">
                            Superior room - 1 double bed or 2 twin beds
                        </div>
                    </div>
                    <div className="hotel-rooms__item-right">
                        <div className="hotel-rooms__item-price">
                            {" "}
                            <span>$240</span>/night
                        </div>
                        <button
                            className="button button--bold"
                            type="button"
                            style={{ width: 150 }}
                        >
                            Book now
                        </button>
                    </div>
                </li>
                <li className="hotel-rooms__item">
                    <div className="hotel-rooms__item-left">
                        <div className="hotel-rooms__item-image">
                            <img
                                src="./img/hotels/hotel-example-1/rooms/03.jpg"
                                alt="available room"
                            />
                        </div>
                        <div className="hotel-rooms__item-title">
                            Superior room - 1 double bed or 2 twin beds
                        </div>
                    </div>
                    <div className="hotel-rooms__item-right">
                        <div className="hotel-rooms__item-price">
                            {" "}
                            <span>$240</span>/night
                        </div>
                        <button
                            className="button button--bold"
                            type="button"
                            style={{ width: 150 }}
                        >
                            Book now
                        </button>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default HotelRooms;