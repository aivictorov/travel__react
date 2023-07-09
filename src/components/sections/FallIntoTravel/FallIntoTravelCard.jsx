import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../../App';
import Button from '../../elements/Button/Button';
import destinations from './../../../data/destinations';
import { buildDatesArray, daysFromToday, formatDate } from '../../../utils/dateTimeFunctions';

const FallIntoTravelCard = ({ layout, city, title, text, price, img }) => {
    const navigate = useNavigate();

    const { flightSearchParams, setFlightSearchParams, hotelSearchParams, setHotelSearchParams } = useContext(AppContext);

    return (
        <div className="fall-into-travel-card">
            <img src={img} alt="Melbourne" />
            <div className="fall-into-travel-card__content">
                <div className="fall-into-travel-card__header">
                    <div className="fall-into-travel-card__header-left">
                        <div className="fall-into-travel-card__title">
                            {title}
                        </div>
                        <div className="fall-into-travel-card__subtitle">
                            {text}
                        </div>
                    </div>
                    <div className="fall-into-travel-card__header-right">
                        <div className="fall-into-travel-card__price">{`$${price}`}</div>
                    </div>
                </div>
                <Button
                    text={layout === "flights" ? "Book flight" : "Book hotel"}
                    style="w100"
                    action={() => {
                        const destination = destinations.find((item) => item.city === city)

                        if (layout === "flights") {
                            setFlightSearchParams({
                                ...flightSearchParams,
                                from: destinations[0].airport,
                                to: destination.airport,
                                depart: formatDate(daysFromToday(1)),
                                return: formatDate(daysFromToday(3)),
                                passangers: 1,
                                class: "economy"
                            });
                            navigate("/flight-listing");
                        } else if (layout === "hotels") {
                            setHotelSearchParams({
                                ...hotelSearchParams,
                                destination: destination.city,
                                checkIn: formatDate(daysFromToday(1)),
                                checkOut: formatDate(daysFromToday(3)),
                                allDates: buildDatesArray([daysFromToday(1), daysFromToday(3)]),
                                rooms: 1,
                                guests: 1
                            });
                            navigate("/hotel-listing");
                        }
                    }}
                />

            </div>
        </div>
    );
}

export default FallIntoTravelCard;