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
import { useNavigate } from "react-router-dom";

const HotelDetails = () => {
    const navigate = useNavigate();

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
                            title="CVK Park Bosphorus Hotel Istanbul"
                            action={() => { navigate('/hotel-booking') }}
                        />
                    </div>
                    <div className="details__flight-content"></div>
                    <div className="details__hotel-content">
                        <HotelGallery />
                        <HotelOverview />
                        <HotelRooms />
                        <HotelLocation />
                        <HotelAmenities />
                        <HotelReviews />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default HotelDetails;