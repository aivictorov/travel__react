import HeaderInner from './../components/sections/HeaderInner/HeaderInner';
import SearchForm from "../components/forms/SearchForm/SearchForm";
import HotelListingCard from '../components/blocks/HotelListingCard/HotelListingCard';
import Footer from "../components/sections/Footer/Footer";
import Button from './../components/elements/Button/Button';
import Tabs from './../components/elements/Tabs/Tabs';
import ListingSort from '../components/blocks/ListingSort/ListingSort';
import ListingFiltersHotels from '../components/blocks/ListingFilters/ListingFiltersHotels';

const HotelListing = () => {

    const tabs = [
        {
            title: 'Hotels',
            subtitle: '257 places',
            active: false,
        },
        {
            title: 'Motels',
            subtitle: '51 places',
            active: false,
        },
        {
            title: 'Resorts',
            subtitle: '72 places',
            active: false,
        },
    ];



    return (
        <>
            <HeaderInner />

            <main className="listing">
                <div className="listing-form">
                    <div className="container">
                        <SearchForm page="hotel-listing" />
                    </div>
                </div>
                <div className="listing-content">
                    <div className="container">
                        <div className="listing-content__row">
                            <div className="listing-content__left">
                                <ListingFiltersHotels />
                            </div>
                            <div className="listing-content__right">
                                <div className="listing-content__right-wrapper">
                                    <Tabs tabs={tabs} />

                                    <div className="listing-sort">
                                        <div className="listing-sort__left">
                                            Showing 4 of <a href="#!">257 places</a>
                                        </div>
                                        <div className="listing-sort__right">
                                            <span>Sort by </span>Recommended
                                        </div>
                                    </div>

                                    <div className="listing-content__cards">
                                        <HotelListingCard />
                                        <HotelListingCard />
                                    </div>
                                </div>
                                <div className="listing-content__right-button">
                                    <Button
                                        text="Show more"
                                        style="dark bold w100"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            
            <Footer />
        </>
    );
}

export default HotelListing;