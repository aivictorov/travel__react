import './SearchFormFlights.scss';
import SearchFormButtons from "./SearchFormButtons";
import Input from './../../elements/Input/Input';
import { AppContext } from './../../../App';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonSquare from './../../elements/ButtonSquare/ButtonSquare';

const SearchFormFlights = ({ layout }) => {
    const navigate = useNavigate();

    const { flightSearchParams, setFlightSearchParams } = useContext(AppContext);

    const [from, setFrom] = useState((flightSearchParams && flightSearchParams.from) || '');
    const [to, setTo] = useState((flightSearchParams && flightSearchParams.to) || '');

    function defaultDepartDate() {
        const date = new Date();
        return formatDate(date);
    };

    function defaultReturnDate() {
        const date = new Date();
        date.setDate(date.getDate() + 1);
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

    const today = defaultDepartDate();
    const tomorrow = defaultReturnDate();

    const [departDate, setDepartDate] = useState(today);
    const [returnDate, setReturnDate] = useState(tomorrow);
    // const [departDate, setDepartDate] = useState((searchParams && searchParams.departDate) || '');

    const getSearchParams = (event) => {
        event.preventDefault();

        const newSearchParams = {
            ...flightSearchParams,
            from: from || 'All',
            to: to || 'All',
            depart: departDate || today,
            return: returnDate || tomorrow,
        };

        setFlightSearchParams(newSearchParams);
        navigate("/flight-listing");
    }

    return (
        <form
            className="search-form__content"
            tab-content="flight-search"
            tab-group="search"
        >
            <div className={`search-form__fields search-form__fields--flights-${layout}`}>
                <Input
                    type="text"
                    label="From"
                    placeholder="Lahore"
                    value={from}
                    onChangeFunction={setFrom}
                />
                <Input
                    type="text"
                    label="To"
                    placeholder="Karachi"
                    value={to}
                    onChangeFunction={setTo}
                />
                <Input
                    type="text"
                    label="Depart"
                    value={departDate}
                    onChangeFunction={setDepartDate}
                />
                <Input
                    type="text"
                    label="Return"
                    value={returnDate}
                    onChangeFunction={setReturnDate}
                />
                <Input
                    label="Passenger & Class"
                    placeholder="1 Passenger, Economy"
                    value="1 Passenger, Economy"
                    onChangeFunction={() => {console.log('x');}}
                />
                <ButtonSquare
                    style=""
                    svgID="search-icon"
                    action={getSearchParams}
                />
            </div>
            {layout !== 'short' &&
                <SearchFormButtons layout="flights" action={getSearchParams} />
            }
        </form>
    );
};

export default SearchFormFlights;