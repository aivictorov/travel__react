import './SearchFormFlights.scss';
import SearchFormButtons from "./SearchFormButtons";
import Input from './../../elements/Input/Input';
import { AppContext } from './../../../App';
import { useState, useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonSquare from './../../elements/ButtonSquare/ButtonSquare';
import airlines from './../../../data/airlines'
import destinations from './../../../data/destinations'
import { formatDate } from './../../../utils/dateFunctions'
import SearchDropdown from './../../modals/SearchDropdown/SearchDropdown';

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

    const today = defaultDepartDate();
    const tomorrow = defaultReturnDate();

    const [departDate, setDepartDate] = useState(today);
    const [returnDate, setReturnDate] = useState(tomorrow);

    const getSearchParams = (event) => {
        event.preventDefault();

        const newSearchParams = {
            ...flightSearchParams,
            from: from || 'All',
            to: to || 'All',
            depart: departDate || today,
            return: returnDate,
        };

        setFlightSearchParams(newSearchParams);
        navigate("/flight-listing");
    }

    const fromDropdownRef = useRef();
    const [fromList, setFromList] = useState([]);

    useEffect(() => {
        let newList = [];

        destinations.forEach((item) => {
            if (from !== '' && item.airport.toLowerCase().includes(from.toLowerCase())) {
                newList.push(item.airport);
            }
        });

        if (newList.length === 0) {
            fromDropdownRef.current.classList.remove('active');
        } else if (!from.includes(newList)) {
            fromDropdownRef.current.classList.add('active');
        };

        setFromList(newList);
    }, [from])

    const toDropdownRef = useRef();
    const [toList, setToList] = useState([]);

    useEffect(() => {
        let newList = [];

        destinations.forEach((item) => {
            if (to !== '' && item.airport.toLowerCase().includes(to.toLowerCase())) {
                newList.push(item.airport);
            }
        });

        if (newList.length === 0) {
            toDropdownRef.current.classList.remove('active');
        } else if (!to.includes(newList)) {
            toDropdownRef.current.classList.add('active');
        };

        setToList(newList);
    }, [to])

    return (
        <form
            className="search-form__content"
            tab-content="flight-search"
            tab-group="search"
        >
            <div className={`search-form__fields search-form__fields--flights-${layout}`}>
                <div
                    className="search-form__field-wrapper"
                    onClick={(event) => { event.stopPropagation() }}
                >
                    <Input
                        type="text"
                        label="From"
                        placeholder="Lahore"
                        value={from}
                        onChangeFunction={setFrom}
                        onFocusFunction={() => {
                            if (fromList.length > 0) fromDropdownRef.current.classList.add('active');
                        }}
                    />
                    <SearchDropdown
                        ref={fromDropdownRef}
                        list={fromList}
                        onClickFunction={(event) => {
                            setFrom(event.target.dataset.value);
                            fromDropdownRef.current.classList.remove('active');
                        }}
                    />
                </div>
                <div
                    className="search-form__field-wrapper"
                    onClick={(event) => { event.stopPropagation() }}
                >
                    <Input
                        type="text"
                        label="To"
                        placeholder="Karachi"
                        value={to}
                        onChangeFunction={setTo}
                        onFocusFunction={() => {
                            if (toList.length > 0) toDropdownRef.current.classList.add('active');
                        }}
                    />
                    <SearchDropdown
                        ref={toDropdownRef}
                        list={toList}
                        onClickFunction={(event) => {
                            setTo(event.target.dataset.value);
                            toDropdownRef.current.classList.remove('active');
                        }}
                    />
                </div>
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
                    onChangeFunction={() => { console.log('x'); }}
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