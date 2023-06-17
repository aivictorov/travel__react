import './SearchFormFlights.scss';
import SearchFormButtons from "./SearchFormButtons";
import Input from './../../elements/Input/Input';
import { AppContext } from './../../../App';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonSquare from './../../elements/ButtonSquare/ButtonSquare';

const SearchFormFlights = ({ layout }) => {
    const navigate = useNavigate();

    const { searchParams, setSearchParams } = useContext(AppContext);

    const [from, setFrom] = useState((searchParams && searchParams.from) || '');
    const [to, setTo] = useState((searchParams && searchParams.to) || '');
    const [departDate, setDepartDate] = useState('2023-12-01');
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
            ...searchParams,
            flights: {
                'from': from || 'All',
                'to': to || 'All',
                'departDate': departDate,
                // 'departDate': newDepartDate,
                // 'returnDate': newReturnDate,
                // 'passengers': 1,
                // 'travelClass': 'economy',
            }
        };

        setSearchParams(newSearchParams);
        navigate("/flight-listing");
    }

    return (
        <form
            className="search-form__content"
            tab-content="flight-search"
            tab-group="search"
        >
            {departDate}
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
                    type="date"
                    label="Depart"
                    value={departDate}
                    onChangeFunction={setDepartDate}
                />
                <Input
                    type="date"
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