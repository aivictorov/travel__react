import './RoomsAndGuests.scss';

const RoomsAndGuests = ({ rooms, setRooms, guests, setGuests }) => {

    return (
        <div className="roomsAndGuestsDrop">
            <div className="roomsAndGuestsDrop__item">
                <div className="roomsAndGuestsDrop__item-name">
                    Set number of rooms:
                </div>
                <div className="roomsAndGuestsDrop__item-controls">
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
            </div>

            <div className="roomsAndGuestsDrop__item">
                <div className="roomsAndGuestsDrop__item-name">
                    Set number of guests:
                </div>
                <div className="roomsAndGuestsDrop__item-controls">
                    <button
                        type="button"
                        onClick={() => setGuests(--guests)}
                        disabled={guests > 1 ? null : true}
                    >
                        -
                    </button>
                    <input
                        name="guests"
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
        </div >
    );
}

export default RoomsAndGuests;