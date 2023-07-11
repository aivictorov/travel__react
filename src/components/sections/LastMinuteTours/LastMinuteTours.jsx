import './LastMinuteTours.scss'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './../../../App';
import Button from '../../elements/Button/Button';
import SectionHeader from '../../blocks/SectionHeader/SectionHeader';
import destinations from './../../../data/destinations';
import { buildDatesArray, daysFromToday, formatDate } from '../../../utils/dateTimeFunctions';
import tourImg01 from './../../../img/sections/last-minute-tours/01.jpg';
import tourImg02 from './../../../img/sections/last-minute-tours/02.jpg';
import tourImg03 from './../../../img/sections/last-minute-tours/03.jpg';
import tourImg04 from './../../../img/sections/last-minute-tours/04.jpg';

const LastMinuteTours = ({ layout = 'flights' }) => {
    const navigate = useNavigate();

    const { flightSearchParams, setFlightSearchParams, hotelSearchParams, setHotelSearchParams } = useContext(AppContext);

    const gallery = [tourImg01, tourImg02, tourImg03, tourImg04];

    return (
        <section className="last-minute-tours">
            <div className="container">
                <SectionHeader
                    title="Last minute tours"
                    text="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
                    button="See All"
                />
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
                                Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.
                            </p>
                        </div>
                        <div className="last-minute-tours__card-button">
                            <Button
                                text={layout === "flights" ? "Book flight" : "Book hotel"}
                                classes="light w100"
                                action={() => {
                                    const destination = destinations.find((item) => item.city === "Colombo")

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

                    <div className="last-minute-tours__gallery">
                        {gallery.map((image, index) => {
                            return (
                                <div
                                    className="last-minute-tours__image"
                                    key={index}
                                >
                                    <img
                                        src={image}
                                        alt="Backpacking Sri Lanka"
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LastMinuteTours;