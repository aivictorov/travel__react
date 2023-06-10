import './SearchFormFlights.scss';
import SearchFormFlightsButtons from "./SearchFormFlightsButtons";
import Input from './../../elements/Input/Input';
import Select from './../../elements/Select/Select';
import { AppContext } from './../../../App';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchFormFlights = ({ layout }) => {
    const navigate = useNavigate();

    const { searchParams, setSearchParams } = useContext(AppContext);

    const [from, setFrom] = useState((searchParams && searchParams.from) || []);

    const getData = (event) => {
        event.preventDefault();
        const data = { 'from': from };
        // alert(JSON.stringify(data));
        setSearchParams(data);
        localStorage.setItem('searchParams', JSON.stringify(data));
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
                    label="From - To"
                    placeholder="Lahore - Karachi"
                    value={from}
                    onChangeFunction={setFrom}
                />
                <Select />
                <Input
                    label="Depart - Return"
                    placeholder="07 Nov 22 - 13 Nov 22"
                    defaultValue="07 Nov 22 - 13 Nov 22"
                />
                <Input
                    label="Passenger - Class"
                    placeholder="1 Passenger, Economy"
                    defaultValue="1 Passenger, Economy"
                />
                <button
                    className="square-button"
                    style={{ width: 56, height: 56 }}
                    type="submit"
                    onClick={getData}
                >
                    <svg width={24} height={24}>
                        <use href="#search-icon" />
                    </svg>
                </button>
            </div>
            {layout !== 'short' && <SearchFormFlightsButtons getData={getData} />}
        </form>
    );
};

export default SearchFormFlights;