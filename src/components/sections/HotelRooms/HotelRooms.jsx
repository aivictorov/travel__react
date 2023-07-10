import './HotelRooms.scss';
import { useContext, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './../../../App';
import Button from '../../elements/Button/Button';

const HotelRooms = forwardRef(({ rooms }, ref) => {
    const { hotelSearchParams, selectedHotel, setSelectedHotel } = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <section
            className="hotel-rooms"
            ref={ref}
        >
            <h2 className="hotel-rooms__title">Available rooms</h2>
            <ul className="hotel-rooms__list">
                {rooms.map((room, index) => {
                    return (room.dates.includes(...hotelSearchParams.allDates) &&
                        <li
                            key={index}
                            className="hotel-rooms__item"
                        >
                            <div className="hotel-rooms__item-left">
                                <div className="hotel-rooms__item-image">
                                    <img
                                        src="./img/hotels/hotel-example-1/rooms/01.jpg"
                                        alt="available room"
                                    />
                                </div>
                                <div className="hotel-rooms__item-title">
                                    {room.name}
                                </div>
                            </div>
                            <div className="hotel-rooms__item-right">
                                <div className="hotel-rooms__item-price">
                                    <span>{`$${room.price}`}</span>/night
                                </div>
                                <div className="hotel-rooms__item-button-wrapper">
                                    <Button
                                        text="Book now"
                                        style="bold w100"
                                        action={() => {
                                            setSelectedHotel({ ...selectedHotel, room: room.id });
                                            navigate('/hotel-booking')
                                        }}
                                    />
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    );
});

export default HotelRooms;