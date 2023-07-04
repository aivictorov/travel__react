import './SearchFormFlights.scss';
import SearchFormButtons from "./SearchFormButtons";
import Input from './../../elements/Input/Input';
import { AppContext } from './../../../App';
import { useState, useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonSquare from './../../elements/ButtonSquare/ButtonSquare';
import destinations from './../../../data/destinations'
import { dateStringToObject, daysFromToday, formatDate } from '../../../utils/dateTimeFunctions'
import Drop from './../../drops/Drop/Drop';
import DropList from '../../drops/DropList/DropList';
import PassAndClass from './../../drops/PassAndClass/PassAndClass';
import DropCalendar from './../../drops/DropCalendar/DropCalendar';

const SearchFormFlights = ({ layout }) => {
    const navigate = useNavigate();
    const { flightSearchParams, setFlightSearchParams } = useContext(AppContext);

    const [from, setFrom] = useState(flightSearchParams.from || '');
    const [to, setTo] = useState(flightSearchParams.to || '');
    const [dates, setDates] = useState([
        flightSearchParams.depart ? dateStringToObject(flightSearchParams.depart) : daysFromToday(1),
        flightSearchParams.return ? dateStringToObject(flightSearchParams.return) : daysFromToday(3),
    ]);
    const [passangers, setPassangers] = useState(flightSearchParams.passangers || 1);
    const [serviceClass, setServiceClass] = useState(flightSearchParams.class || 'economy');

    const airports = [];

    destinations.forEach((item) => {
        airports.push(item.airport);
    });

    function formatPassAndClass(passangers, serviceClass) {
        return `${passangers} ${(passangers === 1) ? 'Passenger' : 'Passengers'}, ${serviceClass.charAt(0).toUpperCase() + serviceClass.slice(1)}`
    }

    function changePassAndClass(value) {
        let valueArray = value.split(', ');
        setPassangers(parseInt(valueArray[0]));
        setServiceClass(valueArray[1]);
    }

    // === DROPS ===

    // 1. Drop "From"
    const [openDropFrom, setOpenDropFrom] = useState(false);
    const [dropFromList, setDropFromList] = useState([]);

    useEffect(() => {
        let list = [];

        airports.forEach((item) => {
            if (from !== '' && item.toLowerCase().includes(from.toLowerCase())) {
                list.push(item);
            }
        });

        setDropFromList(list);
    }, [from])

    // 2. Drop "To"
    const [openDropTo, setOpenDropTo] = useState(false);
    const [dropToList, setDropToList] = useState([]);

    useEffect(() => {
        let list = [];

        airports.forEach((item) => {
            if (to !== '' && item.toLowerCase().includes(to.toLowerCase())) {
                list.push(item);
            }
        });

        setDropToList(list);
    }, [to])

    // 3. Drop "Calendar"
    const [openDropCalendar, setOpenDropCalendar] = useState(false);

    // 4. Drop "PassAndClass"
    const [openDropPassAndClass, setOpenDropPassAndClass] = useState(false);

    // === VALIDATION ===

    // 1. Check "FROM"
    const [fromCheckOn, setFromCheckOn] = useState(false);
    const [fromCheckMsg, setFromCheckMsg] = useState('');

    function checkFrom() {
        let result = false;

        if (!from.trim()) {
            setFromCheckMsg('Please, enter airport');
        } else if (!airports.includes(from.trim())) {
            setFromCheckMsg('Airport not found');
        } else {
            setFromCheckMsg('');
            result = true;
        };

        return result;
    };

    useEffect(() => {
        if (fromCheckOn) checkFrom();
    }, [from]);

    // 2. Check "TO"
    const [toCheckOn, setToCheckOn] = useState(false);
    const [toCheckMsg, setToCheckMsg] = useState('');

    function checkTo() {
        let result = false;

        if (!to.trim()) {
            setToCheckMsg('Please, enter airport');
        } else if (!dropToList.includes(to.trim())) {
            setToCheckMsg('Airport not found');
        } else {
            setToCheckMsg('');
            result = true;
        };

        return result;
    };

    useEffect(() => {
        if (toCheckOn) checkTo();
    }, [to]);

    // 3. Form validation
    function validateForm() {
        let result = [];

        if (!checkFrom()) {
            setFromCheckOn(true);
            result.push(false);
        } else {
            setFromCheckOn(false);
        };

        if (!checkTo()) {
            setToCheckOn(true);
            result.push(false);
        } else {
            setToCheckOn(false);
        };

        return !result.includes(false);
    };

    // === SUBMIT FORM ===

    const getSearchParams = (event) => {
        event.preventDefault();

        if (validateForm()) {
            const newSearchParams = {
                ...flightSearchParams,
                from: from.trim(),
                to: to.trim(),
                depart: formatDate(dates[0]),
                return: formatDate(dates[1]),
                passangers: passangers,
                class: serviceClass,
            };

            setFlightSearchParams(newSearchParams);
            navigate("/flight-listing");
        };
    };

    return (
        <form className="search-form__content">
            <div className={`search-form__fields search-form__fields--flights-${layout}`}>

                {/* FROM */}
                <div className="search-form__field-wrapper">
                    <Input
                        name="from"
                        label="From"
                        placeholder="Sydney"
                        value={from}
                        onChangeFunction={setFrom}
                        onFocusFunction={() => setOpenDropFrom(true)}
                        validation={fromCheckOn}
                        message={fromCheckMsg}
                        autocomplete="off"
                    />
                    <Drop
                        name="from"
                        style="search"
                        isOpen={openDropFrom}
                        onClose={() => setOpenDropFrom(false)}
                        content={
                            <DropList
                                list={dropFromList}
                                onClose={() => setOpenDropFrom(false)}
                                setValue={setFrom}
                            />
                        }
                    />
                </div>

                {/* TO */}
                <div className="search-form__field-wrapper">
                    <Input
                        name="to"
                        label="To"
                        placeholder="Istanbul"
                        value={to}
                        onChangeFunction={setTo}
                        onFocusFunction={() => setOpenDropTo(true)}
                        validation={toCheckOn}
                        message={toCheckMsg}
                        autocomplete="off"
                    />
                    <Drop
                        name="to"
                        style="search"
                        isOpen={openDropTo}
                        onClose={() => setOpenDropTo(false)}
                        content={
                            <DropList
                                list={dropToList}
                                onClose={() => setOpenDropTo(false)}
                                setValue={setTo}
                            />
                        }
                    />
                </div>

                {/* DEPART */}
                <div className="search-form__field-wrapper">
                    <Input
                        name="depart"
                        label="Depart"
                        placeholder="Istanbul"
                        value={formatDate(dates[0])}
                        onChangeFunction={() => { }}
                        onFocusFunction={() => setOpenDropCalendar(true)}
                    />
                    <Drop
                        name={["depart", "return"]}
                        style="calendar"
                        isOpen={openDropCalendar}
                        onClose={() => setOpenDropCalendar(false)}
                        content={
                            <DropCalendar
                                dates={dates}
                                setDates={setDates}
                            />
                        }
                    />
                </div>

                {/* RETURN */}
                <div className="search-form__field-wrapper">
                    <Input
                        name="return"
                        label="Return"
                        placeholder="Istanbul"
                        value={formatDate(dates[1])}
                        onChangeFunction={() => { }}
                        onFocusFunction={() => setOpenDropCalendar(true)}
                    />
                </div>

                {/* PASSANGERS AND CLASS */}
                <div className="search-form__field-wrapper">
                    <Input
                        name="passAndClass"
                        label="Passenger & Class"
                        placeholder="1 Passenger, Economy"
                        value={formatPassAndClass(passangers, serviceClass)}
                        onChangeFunction={(event) => { changePassAndClass(event.target.value) }}
                        onFocusFunction={() => setOpenDropPassAndClass(true)}
                    />
                    <Drop
                        name="passAndClass"
                        style="search"
                        isOpen={openDropPassAndClass}
                        onClose={() => setOpenDropPassAndClass(false)}
                        content={
                            <PassAndClass
                                passangers={passangers}
                                setPassangers={setPassangers}
                                serviceClass={serviceClass}
                                setServiceClass={setServiceClass}
                            />
                        }
                    />
                </div>

                <ButtonSquare
                    type="submit"
                    svgID="search-icon"
                    action={getSearchParams}
                />
            </div>

            {layout !== 'short' &&
                <SearchFormButtons
                    layout="flights"
                    action={getSearchParams}
                />
            }

        </form>
    );
};

export default SearchFormFlights;