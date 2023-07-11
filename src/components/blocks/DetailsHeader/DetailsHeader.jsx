import './DetailsHeader.scss';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './../../../App';
import Button from '../../elements/Button/Button';
import ButtonSquare from './../../elements/ButtonSquare/ButtonSquare';
import Carrier from './../../elements/Carrier/Carrier';
import FavCheckboxButton from '../../elements/FavCheckboxButton/FavCheckboxButton';
import Location from './../../elements/Location/Location';
import Price from './../../elements/Price/Price';
import Rating from './../../elements/Rating/Rating';
import Stars from './../../elements/Stars/Stars';
import { findFlight, findHotel } from '../../../utils/searchFunctions';

const DetailsHeader = ({ layout, roomsRef }) => {
    const navigate = useNavigate();
    const { userAuth, selectedHotel, selectedFlight } = useContext(AppContext);

    let hotel, flight, price;
    if (layout === 'flight') {
        flight = findFlight(selectedFlight.direct);
        price = selectedFlight.price;
    }
    if (layout === 'hotel') {
        hotel = findHotel(selectedHotel.id);
        price = hotel.rooms.reduce((prev, curr) => curr.price < prev ? curr.price : prev, hotel.rooms[0].price);
    }

    function scrollToRef() {
        roomsRef.current.scrollIntoView({ block: 'center' });
    };

    return (
        <div className="details-header">
            <div className="details-header__content">
                <div className="details-header__left">
                    <div className="details-header__main">
                        <div className="details-header__main-title">
                            {layout === 'flight' &&
                                `${flight.from} - ${flight.to} (Round-trip)`
                            }
                            {layout === 'hotel' &&
                                hotel.name
                            }
                        </div>
                        {layout === 'hotel' &&
                            <Stars number={5} />
                        }
                    </div>
                    <div className="details-header__details">
                        {layout === 'hotel' &&
                            <>
                                <Location text="Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437" />
                                <Rating value={3.2} />
                            </>
                        }
                        {layout === 'flight' &&
                            <>
                                <Carrier
                                    text="Carrier: The Emirates Group. Dubai, United Arab Emirates"
                                />
                                <Rating value={3.2} />
                            </>
                        }
                    </div>
                </div>
                <div className="details-header__right">
                    <Price
                        value={price}
                        classes="big"
                    />
                    <div className="details-header__buttons">
                        {layout === 'hotel' && userAuth &&
                            <FavCheckboxButton hotelBooking={hotel.id} />
                        }
                        <ButtonSquare
                            classes="border small"
                            svgID="share"
                        />
                        <div className="details-header__button-wrapper">
                            {layout === 'flight' &&
                                <Button
                                    text="Book now"
                                    classes="bold w100"
                                    action={() => navigate('/flight-booking')}
                                />
                            }
                            {layout === 'hotel' &&
                                <Button
                                    text="Book now"
                                    classes="bold w100"
                                    action={scrollToRef}
                                />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsHeader;