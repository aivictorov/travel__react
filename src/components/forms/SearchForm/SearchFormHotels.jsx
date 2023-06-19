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

    const [destination, setDestination] = useState(hotelSearchParams.destination || '');

    function defaultCheckIn() {
        const date = new Date();
        return formatDate(date);
    };

    function formatDate(dateObj) {
        let day = dateObj.getDate();
        if (day.toString().length === 1) day = '0' + day.toString();
        let month = dateObj.getMonth() + 1;
        if (month.toString().length === 1) month = '0' + month.toString();
        const year = dateObj.getFullYear();
        const dateString = `${day}.${month}.${year}`;
        return dateString;
    };
    
    const today = defaultCheckIn();

    const [checkIn, setCheckIn] = useState(today);
    const [checkOut, setCheckOut] = useState();

    const getSearchParams = (event) => {
        event.preventDefault();

        const newSearchParams = {
            ...hotelSearchParams, 
            destination: destination,
            checkIn: checkIn || today,
        };

        setHotelSearchParams(newSearchParams);
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
                    type="text"
                    label="Check In"
                    placeholder="Fri 12/2"
                    value={checkIn}
                    onChangeFunction={setCheckIn}
                />
                <Input
                    type="text"
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