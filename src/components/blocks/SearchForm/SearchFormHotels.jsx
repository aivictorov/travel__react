import { useNavigate } from 'react-router-dom';
import './SearchFormHotels.scss';
import SearchFormHotelsButtons from "./SearchFormHotelsButtons";
import { useContext, useState } from 'react';
import { AppContext } from '../../../App';
import Input from '../../elements/Input/Input';

const SearchFormHotels = ({ layout }) => {
    const navigate = useNavigate();

    const { searchParams, setSearchParams } = useContext(AppContext);

    const [destination, setDestination] = useState((searchParams && searchParams.destination) || '');
    const [checkIn, setCheckIn] = useState((searchParams && searchParams.checkIn) || '1970-01-01');
    const [checkOut, setCheckOut] = useState((searchParams && searchParams.checkOut) || '1970-01-01');

    const getSearchParams = (event) => {
        event.preventDefault();

        const arrayCheckIn = checkIn.split(['-']);
        const newCheckIn = new Date(arrayCheckIn[0], arrayCheckIn[1], arrayCheckIn[2]);

        const arrayCheckOut = checkOut.split(['-']);
        const newCheckOut = new Date(arrayCheckOut[0], arrayCheckOut[1], arrayCheckOut[2]);

        const newSearchParams = {
            'destination': destination,
            'checkIn': newCheckIn,
            'checkOut': newCheckOut,
            'rooms': 1,
            'guests': 2,
        };

        setSearchParams(newSearchParams);
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
                <button
                    className="square-button"
                    type="button"
                    style={{ width: 56, height: 56 }}
                    onClick={getSearchParams}
                >
                    <svg width={24} height={24}>
                        <use href="#search-icon" />
                    </svg>
                </button>
            </div>
            {layout !== 'short' && <SearchFormHotelsButtons onClickFunction={getSearchParams} />}
        </form>
    );
};

export default SearchFormHotels;