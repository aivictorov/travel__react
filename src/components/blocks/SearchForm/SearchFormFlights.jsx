import './SearchFormFlights.scss';
import SearchFormFlightsButtons from "./SearchFormFlightsButtons";
import Input from './../../elements/Input/Input';
import Select from './../../elements/Select/Select';
import { AppContext } from './../../../App';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchFormFlights = ({ layout }) => {
    const navigate = useNavigate();

    const { searchParams, setSearchParams } = useContext(AppContext);

    const [from, setFrom] = useState((searchParams && searchParams.from) || '');
    const [to, setTo] = useState((searchParams && searchParams.to) || '');
    const [departDate, setDepartDate] = useState((searchParams && searchParams.departDate) || '');
    const [returnDate, setReturnDate] = useState((searchParams && searchParams.returnDate) || '');

    const getSearchParams = (event) => {
        event.preventDefault();

        // const arrayDepartDate = departDate.split(['-']);
        // const newDepartDate = new Date(arrayDepartDate[0], arrayDepartDate[1], arrayDepartDate[2], 0, 0);

        // const arrayReturnDate = returnDate.split(['-']);
        // const newReturnDate = new Date(arrayReturnDate[0], arrayReturnDate[1], arrayReturnDate[2], 23, 59);

        const newSearchParams = {
            'from': from,
            'to': to,
            // 'departDate': newDepartDate,
            // 'returnDate': newReturnDate,
            // 'passengers': 1,
            // 'travelClass': 'economy',
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
                    placeholder="07 Nov 22"
                    value={departDate}
                    onChangeFunction={setDepartDate}
                />
                <Input
                    type="date"
                    label="Return"
                    placeholder="13 Nov 22"
                    value={returnDate}
                    onChangeFunction={setReturnDate}
                />
                <Input
                    label="Passenger & Class"
                    placeholder="1 Passenger, Economy"
                />
                <button
                    className="square-button"
                    style={{ width: 56, height: 56 }}
                    type="submit"
                    onClick={getSearchParams}
                >
                    <svg width={24} height={24}>
                        <use href="#search-icon" />
                    </svg>
                </button>
            </div>
            {layout !== 'short' && <SearchFormFlightsButtons onClickFunction={getSearchParams} />}
        </form>
    );
};

export default SearchFormFlights;