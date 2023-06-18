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
        let day = date.getDate();
        if (day.toString().length === 1) day = '0' + day.toString();
        let month = date.getMonth() + 1;
        if (month.toString().length === 1) month = '0' + month.toString();
        const year = date.getFullYear();
        const dateString = `${day}.${month}.${year}`;
        return dateString;
    }

    const today = defaultDepartDate();

    const [departDate, setDepartDate] = useState(today);
    // const [departDate, setDepartDate] = useState((searchParams && searchParams.departDate) || '');
    const [returnDate, setReturnDate] = useState('2023-12-01');
    // const [returnDate, setReturnDate] = useState((searchParams && searchParams.returnDate) || '');

    const getSearchParams = (event) => {
        event.preventDefault();

        // const arrayDepartDate = departDate.split(['-']);
        // const newDepartDate = new Date(arrayDepartDate[0], arrayDepartDate[1], arrayDepartDate[2], 0, 0);

        // const arrayReturnDate = returnDate.split(['-']);
        // const newReturnDate = new Date(arrayReturnDate[0], arrayReturnDate[1], arrayReturnDate[2], 23, 59);

        const newSearchParams = {
            ...flightSearchParams,
            'from': from || 'All',
            'to': to || 'All',
            'depart': departDate || today,
            'return': returnDate || today,
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