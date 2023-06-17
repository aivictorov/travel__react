import HeaderInner from './../components/sections/HeaderInner/HeaderInner';
import SearchForm from "../components/forms/SearchForm/SearchForm";
import HotelListingCard from '../components/cards/HotelListingCard/HotelListingCard';
import Footer from "../components/sections/Footer/Footer";
import Button from './../components/elements/Button/Button';
import Tabs from './../components/elements/Tabs/Tabs';
import ListingSort from '../components/blocks/ListingSort/ListingSort';
import ListingFiltersHotels from '../components/blocks/ListingFilters/ListingFiltersHotels';
import { useContext, useState } from 'react';
import { AppContext } from './../App';
import { useEffect } from 'react';
import ListingFilters from './../components/blocks/ListingFilters/ListingFilters';

const HotelListing = () => {
    const { hotels, hotelSearchParams } = useContext(AppContext);
    const [searchResults, setSearchResults] = useState([]);

    const [filterParams, setFilterParams] = useState(
        {
            price: { min: 0, max: 1000 },
            rating: { min: 0, max: 5 }
        }
    );

    const [filters, setFilters] = useState(
        {
            ...filterParams,
            airlines: [],
            rating: filterParams.rating.min
        }
    );
    
    const changeHotelFilter = (filter) => {
        setFilters({ ...filters, ...filter });
    };

    const [resetFilters, setResetFilters] = useState(true);



    // FULL SEARCH RESULTS FOR CURRENT PARAMS
    useEffect(() => {
        let newSearchResults = hotels.slice(0);

        if (hotelSearchParams.destination !== 'All') {
            newSearchResults = newSearchResults.filter((item) => {
                return hotelSearchParams.destination === item.city
            });
        };

        setSearchResults(newSearchResults);
    }, [hotelSearchParams]);

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
            <p>SEARCH PARAMS </p>
            {JSON.stringify(hotelSearchParams)}
            <br />
            <br />

            <p>SEARCH RESULTS </p>
            {JSON.stringify(searchResults)}
            <br />
            <br />

            {/* <p>FILTER PARAMS </p>
            {JSON.stringify(filterParams)}
            <br />
            <br />

            <p>FILTERS </p>
            {JSON.stringify(filters)}
            <br />
            <br />

            <p>FILTERED </p>
            {JSON.stringify(filteredResults.length)}
            <br />
            <br />

            <p>VISIBLE </p>
            {JSON.stringify(visibleResults.length)}
            <br />
            <br /> */}


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
                                <ListingFilters
                                    layout="hotels"
                                    filterParams={filterParams}
                                    changeFilter={changeHotelFilter}
                                    reset={resetFilters}
                                />
                                {/* <ListingFiltersHotels /> */}
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
                                        {searchResults.length === 0 ? "Hotels not found" : null}
                                        {searchResults.map((hotel) => {
                                            return (
                                                <HotelListingCard
                                                    key={hotel.id}
                                                    object={hotel}
                                                />
                                            )
                                        })}
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