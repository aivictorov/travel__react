import HeaderInner from "../components/sections/HeaderInner/HeaderInner";
import TrackNav from "../components/blocks/TrackNav/TrackNav";
import DetailsHeader from "../components/blocks/DetailsHeader/DetailsHeader";
import HotelOverview from "../components/sections/HotelOverview/HotelOverview";
import HotelRooms from './../components/sections/HotelRooms/HotelRooms';
import HotelLocation from './../components/sections/HotelLocation/HotelLocation';
import HotelReviews from "../components/sections/HotelReviews/HotelReviews";
import HotelGallery from "../components/sections/HotelGallery/HotelGallery";
import HotelAmenities from './../components/sections/HotelAmenities/HotelAmenities';
import Footer from "../components/sections/Footer/Footer";
import { useParams } from "react-router-dom";
import { useContext, useRef } from "react";
import { AppContext } from "../App";
import FavCheckboxButton from './../components/elements/FavCheckboxButton/FavCheckboxButton';

const HotelDetails = () => {
    // const { hotelID } = useParams();

    const { hotels, selectedHotel } = useContext(AppContext);
    const hotelID = selectedHotel.id;

    const hotel = hotels.find((hotel) => hotel.id == hotelID);

    const roomsRef = useRef(null);

    function scrollToRef() {
        roomsRef.current.scrollIntoView({ block: 'center' });
    };

    return (
        <>
            <HeaderInner />
            <main className="details">
                <div className="container">
                    <div className="details__nav">
                        <TrackNav />
                    </div>
                    <div className="details__header">
                        <DetailsHeader
                            title={hotel.name}
                            cover={hotel.cover}
                            action={scrollToRef}
                            favButton={<FavCheckboxButton hotelBooking={hotel.id}/>}
                        />
                    </div>
                    <div className="details__flight-content"></div>
                    <div className="details__hotel-content">
                        <HotelGallery
                            gallery={hotel.gallery}
                        />
                        <HotelOverview
                            description={hotel.description}
                        />
                        <HotelRooms
                            ref={roomsRef}
                            rooms={hotel.rooms}
                        />
                        <HotelLocation
                            address={hotel.address}
                        />
                        <HotelAmenities
                            amenities={hotel.amenities}
                        />
                        <HotelReviews />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default HotelDetails;