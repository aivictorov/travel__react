import { useNavigate } from 'react-router-dom';
import './SearchFormHotels.scss';
import SearchFormButtons from "./SearchFormButtons";
import { useContext, useState } from 'react';
import { AppContext } from '../../../App';
import Input from '../../elements/Input/Input';
import ButtonSquare from '../../elements/ButtonSquare/ButtonSquare';

const SearchFormHotels = ({ layout }) => {
    const navigate = useNavigate();

    const { hotelSearchParams, setHotelSearchParams } = useContext(AppContext);

    const [destination, setDestination] = useState();

    const [checkIn, setCheckIn] = useState();
    const [checkOut, setCheckOut] = useState();

    const getSearchParams = (event) => {
        event.preventDefault();

        const newSearchParams = {
            ...hotelSearchParams, 
            destination: destination
        };

        setHotelSearchParams(newSearchParams);
        alert(JSON.stringify(newSearchParams));
        navigate("/hotel-listing");
    }

    return (
        <form
            className="search-form__content"
            tab-content="hotel-search"
            tab-group="search"
        >
            <div className={`search-form__fields search-form__fields--hotels-${layout}`}>
                <Input
                    type="text"
                    label="Destination"
                    placeholder="Istanbul, Turkey"
                    value={destination}
                    onChangeFunction={setDestination}
                />
                <Input
                    type="date"
                    label="Check In"
                    placeholder="Fri 12/2"
                    value={checkIn}
                    onChangeFunction={setCheckIn}
                />
                <Input
                    type="date"
                    label="Check Out"
                    placeholder="Sun 12/4"
                    value={checkOut}
                    onChangeFunction={setCheckOut}
                />
                <Input
                    type="text"
                    label="Rooms & Guests"
                    placeholder="1 room, 2 guests"
                />
                <ButtonSquare
                    style=""
                    svgID="search-icon"
                    action={getSearchParams}
                />
            </div>
            {layout !== 'short' &&
                <SearchFormButtons layout="hotels" action={getSearchParams} />
            }
        </form>
    );
};

export default SearchFormHotels;