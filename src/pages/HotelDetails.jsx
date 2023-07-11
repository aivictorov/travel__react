import { useContext, useRef } from "react";
import { Navigate } from 'react-router-dom';
import { AppContext } from "../App";
import DetailsHeader from "../components/blocks/DetailsHeader/DetailsHeader";
import Footer from "../components/sections/Footer/Footer";
import HeaderInner from "../components/sections/HeaderInner/HeaderInner";
import HotelAmenities from './../components/sections/HotelAmenities/HotelAmenities';
import HotelGallery from "../components/sections/HotelGallery/HotelGallery";
import HotelLocation from './../components/sections/HotelLocation/HotelLocation';
import HotelOverview from "../components/sections/HotelOverview/HotelOverview";
import HotelReviews from "../components/sections/HotelReviews/HotelReviews";
import HotelRooms from './../components/sections/HotelRooms/HotelRooms';
import TrackNav from "../components/blocks/TrackNav/TrackNav";
import { findHotel } from "../utils/searchFunctions";

const HotelDetails = () => {
    const { selectedHotel } = useContext(AppContext);
    const roomsRef = useRef(null);

    if (selectedHotel) {
        const hotel = findHotel(selectedHotel.id);

        return (
            <>
                <HeaderInner />
                <main className="details">
                    <div className="container">
                        <div className="details__nav">
                            <TrackNav layout="hotels" />
                        </div>
                        <div className="details__header">
                            <DetailsHeader
                                layout="hotel"
                                roomsRef={roomsRef}
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
    } else {
        return <Navigate to="/" />;
    };
}

export default HotelDetails;