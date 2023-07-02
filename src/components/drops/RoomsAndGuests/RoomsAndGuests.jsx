import './RoomsAndGuests.scss';

const RoomsAndGuests = ({ rooms, setRooms, guests, setGuests }) => {

    return (
        <div className="roomsAndGuestsDrop">
            <div className="roomsAndGuestsDrop__row">
                <button
                    type="button"
                    onClick={() => setRooms(--rooms)}
                    disabled={rooms > 1 ? null : true}
                >
                    -
                </button>
                <input
                    name="rooms"
                    type="number"
                    value={rooms}
                    min={1}
                    onChange={(event) => setRooms(event.target.value)}
                />
                <button type="button" onClick={() => setRooms(++rooms)}>
                    +
                </button>
            </div>
            <div className="roomsAndGuestsDrop__row">
                <button
                    type="button"
                    onClick={() => setGuests(--guests)}
                    disabled={guests > 1 ? null : true}
                >
                    -
                </button>
                <input
                    name="rooms"
                    type="number"
                    value={guests}
                    min={1}
                    onChange={(event) => setGuests(event.target.value)}
                />
                <button type="button" onClick={() => setGuests(++guests)}>
                    +
                </button>
            </div>
        </div>
    );
}

export default RoomsAndGuests;