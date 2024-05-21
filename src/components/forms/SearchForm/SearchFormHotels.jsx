import './SearchFormHotels.scss';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../App';
import Input from '../../elements/Input/Input';
import ButtonSquare from '../../elements/ButtonSquare/ButtonSquare';
import DropList from './../../drops/DropList/DropList';
import Drop from './../../drops/Drop/Drop';
import DropCalendar from './../../drops/DropCalendar/DropCalendar';
import RoomsAndGuests from './../../drops/RoomsAndGuests/RoomsAndGuests';
import SearchFormButtons from "./SearchFormButtons";
import destinations from './../../../data/destinations';
import { buildDatesArray, dateStringToObject, daysFromToday, formatDate } from '../../../utils/dateTimeFunctions'

const SearchFormHotels = ({ layout }) => {
    const navigate = useNavigate();

    const { hotelSearchParams, setHotelSearchParams } = useContext(AppContext);

    const [destination, setDestination] = useState(hotelSearchParams.destination || '');

    const [dates, setDates] = useState([
        hotelSearchParams.checkIn ? dateStringToObject(hotelSearchParams.checkIn) : daysFromToday(1),
        hotelSearchParams.checkOut ? dateStringToObject(hotelSearchParams.checkOut) : daysFromToday(3),
    ]);

    const [allDates, setAllDates] = useState([]);

    const [rooms, setRooms] = useState(hotelSearchParams.rooms || 1);
    const [guests, setGuests] = useState(hotelSearchParams.guests || 2);

    const cities = [];

    destinations.forEach((item) => {
        cities.push(item.city);
    });

    function formatRoomsAndGuests(rooms, guests) {
        return `${rooms} ${(rooms === 1) ? 'Room' : 'Rooms'}, ${guests} ${(guests === 1) ? 'Guest' : 'Guests'}`
    }

    useEffect(() => {
        setAllDates(buildDatesArray(dates))
    }, [dates])

    // DROPS

    // 1. Drop "Destination"
    const [openDropDestination, setOpenDropDestination] = useState(false);
    const [dropDestinationsList, setDropDestinationsList] = useState([]);

    useEffect(() => {
        let list = [];

        destinations.forEach((item) => {
            if (destination !== '' && item.city.toLowerCase().includes(destination.toLowerCase())) {
                list.push(item.city);
            }
        });

        setDropDestinationsList(list);
    }, [destination])

    // 2. Drop "Calendar"
    const [openDropCalendarFrom, setOpenDropCalendarFrom] = useState(false);
    const [openDropCalendarTo, setOpenDropCalendarTo] = useState(false);

    // 3. Drop "RoomsAndGuests"
    const [openDropRoomsAndGuests, setOpenDropRoomsAndGuests] = useState(false);

    // === VALIDATION ===

    // 1. Check "FROM"
    const [destinationCheckOn, setDestinationCheckOn] = useState(false);
    const [destinationCheckMsg, setDestinationCheckMsg] = useState('');

    function checkDestination() {
        let result = false;

        if (!destination.trim()) {
            setDestinationCheckMsg('Please, enter city');
        } else if (!cities.includes(destination.trim())) {
            setDestinationCheckMsg('City not found');
        } else {
            setDestinationCheckMsg('');
            result = true;
        };

        return result;
    };

    useEffect(() => {
        if (destinationCheckOn) checkDestination();
    }, [destination]);

    // 2. Form validation
    function validateForm() {
        let result = [];

        if (!checkDestination()) {
            setDestinationCheckOn(true);
            result.push(false);
        } else {
            setDestinationCheckOn(false);
        };

        return !result.includes(false);
    };

    // === SUBMIT FORM ===

    const getSearchParams = (event) => {
        event.preventDefault();
        if (validateForm()) {
            const newSearchParams = {
                ...hotelSearchParams,
                destination: destination.trim(),
                checkIn: formatDate(dates[0]),
                checkOut: formatDate(dates[1]),
                allDates: allDates,
                rooms: rooms,
                guests: guests,
            };

            setHotelSearchParams(newSearchParams);
            navigate("/hotel-listing");
        };
    };

    return (
        <form
            className="search-form__content"
            tab-content="hotel-search"
            tab-group="search"
        >
            <div className={`search-form__fields search-form__fields--hotels-${layout}`}>

                {/* DESTINATION */}
                <div className="search-form__field-wrapper">
                    <Input
                        name="destination"
                        label="Destination"
                        placeholder="Istanbul, Turkey"
                        value={destination}
                        onChangeFunction={(event) => setDestination(event.target.value)}
                        onFocusFunction={() => setOpenDropDestination(true)}
                        validation={destinationCheckOn}
                        message={destinationCheckMsg}
                        autocomplete="off"
                    />
                    <Drop
                        name="destination"
                        classes="search"
                        isOpen={openDropDestination}
                        onClose={() => setOpenDropDestination(false)}
                        isEmpty={dropDestinationsList.length === 0}
                        content={
                            <DropList
                                list={dropDestinationsList}
                                onClose={() => setOpenDropDestination(false)}
                                setValue={setDestination}
                            />
                        }
                    />
                </div>

                {/* CHECK-IN */}
                <div className="search-form__field-wrapper">
                    <Input
                        name="checkIn"
                        label="Check In"
                        placeholder="Fri 12/2"
                        value={formatDate(dates[0])}
                        onChangeFunction={() => { }}
                        onFocusFunction={() => setOpenDropCalendarFrom(true)}
                    />
                    <Drop
                        name={["checkIn"]}
                        classes="calendar"
                        isOpen={openDropCalendarFrom}
                        onClose={() => setOpenDropCalendarFrom(false)}
                        content={
                            <DropCalendar
                                dates={dates}
                                setDates={setDates}
                            />
                        }
                    />
                </div>

                {/* CHECK-OUT */}
                <div className="search-form__field-wrapper">
                    <Input
                        name="checkOut"
                        label="Check Out"
                        placeholder="Sun 12/4"
                        value={formatDate(dates[1])}
                        onChangeFunction={() => { }}
                        onFocusFunction={() => setOpenDropCalendarTo(true)}
                    />
                    <Drop
                        name={["checkOut"]}
                        classes="calendar"
                        isOpen={openDropCalendarTo}
                        onClose={() => setOpenDropCalendarTo(false)}
                        content={
                            <DropCalendar
                                dates={dates}
                                setDates={setDates}
                            />
                        }
                    />
                </div>

                {/* ROOMS AND GUESTS */}
                <div className="search-form__field-wrapper">
                    <Input
                        name="roomsAndGuests"
                        label="Rooms & Guests"
                        placeholder="1 Room, 2 Guests"
                        value={formatRoomsAndGuests(rooms, guests)}
                        onChangeFunction={() => { }}
                        onFocusFunction={() => setOpenDropRoomsAndGuests(true)}
                    />
                    <Drop
                        name="roomsAndGuests"
                        classes="search"
                        isOpen={openDropRoomsAndGuests}
                        onClose={() => setOpenDropRoomsAndGuests(false)}
                        content={
                            <RoomsAndGuests
                                rooms={rooms}
                                setRooms={setRooms}
                                guests={guests}
                                setGuests={setGuests}
                            />
                        }
                    />
                </div>
                <div className="search-form__field-wrapper">
                    <ButtonSquare
                        classes=""
                        svgID="search-icon"
                        action={getSearchParams}
                    />
                </div>
            </div>

            {layout !== 'short' &&
                <SearchFormButtons layout="hotels" action={getSearchParams} />
            }
        </form>
    );
};

export default SearchFormHotels;