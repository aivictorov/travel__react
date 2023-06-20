import { useNavigate } from 'react-router-dom';
import './SearchFormHotels.scss';
import SearchFormButtons from "./SearchFormButtons";
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../App';
import Input from '../../elements/Input/Input';
import ButtonSquare from '../../elements/ButtonSquare/ButtonSquare';

const SearchFormHotels = ({ layout }) => {
    const navigate = useNavigate();

    const { hotelSearchParams, setHotelSearchParams } = useContext(AppContext);

    const [destination, setDestination] = useState(hotelSearchParams.destination || '');

    function countDefaultCheckIn() {
        const date = new Date();
        return formatDate(date);
    };

    function countDefaultCheckOut() {
        const date = new Date();
        date.setDate(date.getDate() + 3);
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

    const defaultCheckIn = countDefaultCheckIn();
    const defaultCheckOut = countDefaultCheckOut();

    const [checkIn, setCheckIn] = useState(defaultCheckIn);
    const [checkOut, setCheckOut] = useState(defaultCheckOut);
    const [dates, setDates] = useState([]);

    useEffect(() => { 
        const datesArray = buildDatesArray();

        function buildDatesArray() {
            const checkInArray = checkIn.split(['.']);
            const checkOutArray = checkOut.split(['.']);
            const checkInDate = new Date(checkInArray[2], parseInt(checkInArray[1]) - 1, checkInArray[0], 0, 0, 0, 0);
            const checkOutDate = new Date(checkOutArray[2], parseInt(checkOutArray[1]) - 1, checkOutArray[0], 0, 0, 0, 0);
            const duration = Math.floor((checkOutDate - checkInDate) / 1000 / 60 / 60 / 24);
    
            let dates = [];
    
            for (let index = 0; index < duration; index++) {
                let date = new Date(checkInDate);
                date.setDate(date.getDate() + index);
                const formatted = formatDate(date);
                dates.push(formatted)
            }
    
            return dates;
        }

        setDates(datesArray)

    }, [checkIn, checkOut])
   
    const getSearchParams = (event) => {
        event.preventDefault();

        const newSearchParams = {
            ...hotelSearchParams,
            destination: destination,
            checkIn: checkIn || defaultCheckIn,
            checkOut: checkOut || defaultCheckOut,
            dates: dates,
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