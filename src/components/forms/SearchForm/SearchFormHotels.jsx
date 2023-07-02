import { useNavigate } from 'react-router-dom';
import './SearchFormHotels.scss';
import SearchFormButtons from "./SearchFormButtons";
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../App';
import Input from '../../elements/Input/Input';
import ButtonSquare from '../../elements/ButtonSquare/ButtonSquare';
import { formatDate } from './../../../utils/dateFunctions'
import destinations from './../../../data/destinations';
import DropList from './../../drops/DropList/DropList';
import Drop from './../../drops/Drop/Drop';
import DropCalendar from './../../drops/DropCalendar/DropCalendar';
import RoomsAndGuests from './../../drops/RoomsAndGuests/RoomsAndGuests';

const SearchFormHotels = ({ layout }) => {
    const navigate = useNavigate();

    const { hotelSearchParams, setHotelSearchParams } = useContext(AppContext);

    const [destination, setDestination] = useState(hotelSearchParams.destination || '');

    function countDefaultCheckIn() {
        const date = new Date();
        return formatDate(date);
    };

    function countDefaultCheckOut() {
        const date = new Date();
        date.setDate(date.getDate() + 3);
        return formatDate(date);
    };

    const defaultCheckIn = countDefaultCheckIn();
    const defaultCheckOut = countDefaultCheckOut();

    const [checkIn, setCheckIn] = useState(defaultCheckIn);
    const [checkOut, setCheckOut] = useState(defaultCheckOut);



    
    const [dates, setDates] = useState([]);

    const [rooms, setRooms] = useState(hotelSearchParams.rooms || 1);
    const [guests, setGuests] = useState(hotelSearchParams.guests || 2);

    function formatRoomsAndGuests(rooms, guests) {
        return `${rooms} ${(rooms === 1) ? 'Room' : 'Rooms'}, ${guests} ${(guests === 1) ? 'Guest' : 'Guests'}`
    }

    function changeRoomsAndGuests(value) {
        let valueArray = value.split(', ');
        setRooms(parseInt(valueArray[0]));
        setGuests(parseInt(valueArray[1]));
    }

    useEffect(() => {
        const datesArray = buildDatesArray();

        function buildDatesArray() {
            const checkInArray = checkIn.split(['.']);
            const checkOutArray = checkOut.split(['.']);
            const checkInDate = new Date(checkInArray[2], parseInt(checkInArray[1]) - 1, checkInArray[0], 0, 0, 0, 0);
            const checkOutDate = new Date(checkOutArray[2], parseInt(checkOutArray[1]) - 1, checkOutArray[0], 0, 0, 0, 0);
            const duration = Math.floor((checkOutDate - checkInDate) / 1000 / 60 / 60 / 24);

            let dates = [];

            for (let index = 0; index < duration; index++) {
                let date = new Date(checkInDate);
                date.setDate(date.getDate() + index);
                const formatted = formatDate(date);
                dates.push(formatted)
            }

            return dates;
        }

        setDates(datesArray)

    }, [checkIn, checkOut])

    const getSearchParams = (event) => {
        event.preventDefault();

        const newSearchParams = {
            ...hotelSearchParams,
            destination: destination,
            checkIn: checkIn || defaultCheckIn,
            checkOut: checkOut || defaultCheckOut,
            dates: dates,
            rooms: rooms,
            guests: guests,
        };

        setHotelSearchParams(newSearchParams);
        navigate("/hotel-listing");
    }


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
    const [openDropCalendar, setOpenDropCalendar] = useState(false);

    // 3. Drop "RoomsAndGuests"
    const [openDropRoomsAndGuests, setOpenDropRoomsAndGuests] = useState(false);

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
                        onChangeFunction={setDestination}
                        onFocusFunction={() => setOpenDropDestination(true)}
                    />
                    <Drop
                        name="destination"
                        style="search"
                        isOpen={openDropDestination}
                        onClose={() => setOpenDropDestination(false)}
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
                        value={checkIn}
                        onChangeFunction={setCheckIn}
                        onFocusFunction={() => setOpenDropCalendar(true)}
                    />
                    <Drop
                        name={["checkIn", "checkOut"]}
                        style="calendar"
                        isOpen={openDropCalendar}
                        onClose={() => setOpenDropCalendar(false)}
                        content={
                            <DropCalendar
                            // testDates={testDates}
                            // setTestDates={setTestDates}
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
                        value={checkOut}
                        onChangeFunction={setCheckOut}
                        onFocusFunction={() => setOpenDropCalendar(true)}
                    />
                </div>

                {/* ROOMS AND GUESTS */}
                <div className="search-form__field-wrapper">
                    <Input
                        name="roomsAndGuests"
                        label="Rooms & Guests"
                        placeholder="1 Room, 2 Guests"
                        value={formatRoomsAndGuests(rooms, guests)}
                        onChangeFunction={(event) => { changeRoomsAndGuests(event.target.value) }}
                        onFocusFunction={() => setOpenDropRoomsAndGuests(true)}
                    />
                    <Drop
                        name="roomsAndGuests"
                        style="search"
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


                <ButtonSquare
                    style=""
                    svgID="search-icon"
                    action={getSearchParams}
                />
            </div>
            {layout !== 'short' &&
                <SearchFormButtons layout="hotels" action={getSearchParams} />
            }
        </form>
    );
};

export default SearchFormHotels;