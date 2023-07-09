import HeaderInner from './../components/sections/HeaderInner/HeaderInner';
import SearchForm from "../components/forms/SearchForm/SearchForm";
import HotelListingCard from '../components/cards/HotelListingCard/HotelListingCard';
import Footer from "../components/sections/Footer/Footer";
import Button from './../components/elements/Button/Button';
import Tabs from './../components/elements/Tabs/Tabs';
import { useContext, useState } from 'react';
import { AppContext } from './../App';
import { useEffect } from 'react';
import ListingFilters from './../components/blocks/ListingFilters/ListingFilters';
import ListingSort from './../components/blocks/ListingSort/ListingSort';
import ButtonShowMore from './../components/elements/ButtonShowMore/ButtonShowMore';

const HotelListing = () => {
    const { hotels, hotelSearchParams, user, recentSearches } = useContext(AppContext);
    const [searchResults, setSearchResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [numberOfResults, setNumberOfResults] = useState(3);

    const [filterParams, setFilterParams] = useState(
        {
            price: { min: 0, max: 1000 },
            rating: { min: 0, max: 5 }
        }
    );

    const [filters, setFilters] = useState(
        {
            ...filterParams,
            rating: filterParams.rating.min
        }
    );

    const [resetTrigger, setResetTrigger] = useState(true);

    const [sortType, setSortType] = useState('lowest price');

    const changeFilter = (filter) => {
        setFilters({ ...filters, ...filter });
    };

    // FULL SEARCH RESULTS FOR CURRENT PARAMS
    useEffect(() => {
        let newSearchResults = [...hotels];

        if (hotelSearchParams.destination !== 'All') {
            newSearchResults = newSearchResults.filter((item) => {
                return hotelSearchParams.destination === item.city
            });
        };

        newSearchResults = newSearchResults.map((item) => {
            const price = item.rooms.reduce((prev, curr) => curr.price < prev ? curr.price : prev, item.rooms[0].price);
            return item = { ...item, price: price }
        })

        newSearchResults = newSearchResults.filter((item) => {
            // console.log('Фильтруем весь отель: ');
            // console.log('Будем проверять каждую комнату до первой подходящей: ');
            const foundAvailableRoom = item.rooms.findIndex((room) => {
                // console.log('Проверяем комнату: ');
                // console.log('Доступные даты: ', room.dates);
                // console.log('Требуемые даты', hotelSearchParams.dates);
                // console.log('Будем проверять каждую требуемую дату до первой ошибки: ');
                const dateNotFoundInRoom = hotelSearchParams.allDates.findIndex((date) => {
                    return room.dates.includes(date) === false
                })
                // console.log('Найдены ли отсутствующие даты среди доступных: ', dateNotFoundInRoom);
                return dateNotFoundInRoom === -1 ? true : false;
            });
            // console.log('Найдены доступные комнаты: ', foundAvailableRoom);
            return foundAvailableRoom !== -1 ? true : false;
        });

        setSearchResults(newSearchResults);
    }, [hotelSearchParams]);

    // FILTERED SEARCH RESULTS
    useEffect(() => {
        defineFilterParams();
    }, [searchResults]);

    function defineFilterParams() {
        // Default params
        let minPrice = 0, maxPrice = 0;
        let minRating = 0, maxRating = 0;

        // Defining new params
        if (searchResults.length > 1) {

            // New price filter params 
            minPrice = searchResults.reduce((prev, curr) => curr.price < prev ? curr.price : prev, searchResults[0].price);
            maxPrice = searchResults.reduce((prev, curr) => curr.price > prev ? curr.price : prev, searchResults[0].price);

            // Rating filter
            minRating = searchResults.reduce((prev, curr) => curr.rating < prev ? curr.rating : prev, searchResults[0].rating);
            maxRating = searchResults.reduce((prev, curr) => curr.rating > prev ? curr.rating : prev, searchResults[0].rating)
        };

        // Set filter params
        setFilterParams(
            {
                price: { min: minPrice, max: maxPrice },
                rating: { min: minRating, max: maxRating }
            }
        );
    };

    useEffect(() => {
        setFilters(
            {
                ...filterParams,
                rating: filterParams.rating.min
            }
        );
        setResetTrigger(!resetTrigger);
    }, [filterParams])

    useEffect(() => {
        let items = [...searchResults];
        let filtered = applyFilters(items);
        let sorted = applySort(filtered)
        setFilteredResults(sorted);
    }, [filters])

    function applyFilters(items) {

        // Price filter
        if (filters.price.min) {
            items = items.filter((item) => {
                return item.price >= filters.price.min;
            })
        };

        if (filters.price.max) {
            items = items.filter((item) => {
                return item.price <= filters.price.max;
            })
        };

        // Rating filter

        items = items.filter((item) => {
            return item.rating >= filters.rating;
        });

        return items;
    };

    function applySort(items) {

        if (sortType === 'lowest price') {
            items.sort(function (a, b) {

                if (a.price > b.price) {
                    return 1;
                }
                if (a.price < b.price) {
                    return -1;
                }
                return 0;
            });
        }

        // Sorting by highest price

        if (sortType === 'highest price') {
            items.sort(function (a, b) {
                if (a.price < b.price) {
                    return 1;
                }
                if (a.price > b.price) {
                    return -1;
                }
                return 0;
            });
        };

        return items;
    };

    useEffect(() => {
        let items = [...filteredResults];
        let sorted = applySort(items)
        setFilteredResults(sorted);
    }, [sortType])

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
                                <ListingFilters
                                    layout="hotels"
                                    filterParams={filterParams}
                                    changeFilter={changeFilter}
                                    resetTrigger={resetTrigger}
                                />
                            </div>
                            <div className="listing-content__right">
                                <div className="listing-content__right-wrapper">
                                    <Tabs tabs={tabs} />
                                    <ListingSort
                                        filteredResults={filteredResults}
                                        searchResults={searchResults}
                                        numberOfResults={numberOfResults}
                                        setNumberOfResults={setNumberOfResults}
                                        sortType={sortType}
                                        setSortType={setSortType}
                                        resetTrigger={resetTrigger}
                                        setResetTrigger={setResetTrigger}
                                    />
                                    <div className="listing-content__cards">
                                        {filteredResults.length === 0 ? "Hotels not found" : null}
                                        {filteredResults.map((hotel, index) => {
                                            return (
                                                index < numberOfResults &&
                                                <HotelListingCard
                                                    key={hotel.id}
                                                    hotel={hotel.id}
                                                    dates={hotelSearchParams.allDates}
                                                />
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="listing-content__right-button">
                                    {numberOfResults < filteredResults.length &&
                                        <ButtonShowMore
                                            numberOfResults={numberOfResults}
                                            setNumberOfResults={setNumberOfResults}
                                        />
                                    }
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