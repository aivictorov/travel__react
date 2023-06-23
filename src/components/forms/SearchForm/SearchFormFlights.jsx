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
import SearchDropdown from '../../modals/SearchDropdown/SearchDropdown';

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

    // DEV
    const searchDropdownRef = useRef();

    useEffect(() => {
        const closeDropdown = () => searchDropdownRef.current.classList.remove('active');

        const closeDropdownByKey = (event) => {
            if (event.key === 'Escape') closeDropdown();
        };

        document.addEventListener('click', closeDropdown);
        document.addEventListener('keydown', closeDropdownByKey);

        return () => {
            document.removeEventListener('click', closeDropdown);
            document.removeEventListener('keydown', closeDropdownByKey);
        };
    }, []);

    const [fromList, setFromList] = useState([]);

    useEffect(() => {
        let newList = [];

        destinations.forEach((item) => {
            if (from !== '' && item.airport.toLowerCase().includes(from.toLowerCase())) {
                newList.push(item.airport);
            }
        });
        setFromList(newList);
    }, [from])

    useEffect(() => {
        if (fromList.length === 0) {
            searchDropdownRef.current.classList.remove('active');
        } else {
            // searchDropdownRef.current.classList.add('active');
        };
    }, [fromList])

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
                            searchDropdownRef.current.classList.add('active');
                        }}
                    />
                    <div
                        className="search-dropdown"
                        ref={searchDropdownRef}
                    >
                        <ul>
                            {fromList.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        data-value={item}
                                        onClick={(event) => {
                                            searchDropdownRef.current.classList.remove('active');
                                            setFrom(event.target.dataset.value);
                                        }}
                                    >
                                        {item}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <SearchDropdown />

                </div>
                <div className="search-form__field-wrapper">
                    <Input
                        type="text"
                        label="To"
                        placeholder="Karachi"
                        value={to}
                        onChangeFunction={setTo}
                    />




                    {/* <div className="drop-test">
                        <ul className="drop-test__airlines">
                            {destinations.map((item, index) => {
                                return (
                                    (item.airport.toLowerCase().includes(to.toLowerCase())) &&
                                    <li
                                        key={index}
                                        data-value={item.airport}
                                        onClick={(event) => { setTo(event.target.dataset.value); }}
                                    >
                                        {item.airport} {`(${item.code})`}
                                    </li>
                                )
                            })}
                        </ul>
                    </div> */}
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