import './ListingSort.scss';

const ListingSort = ({ filteredResults, searchResults, numberOfResults, setNumberOfResults, sortType, setSortType, resetTrigger, setResetTrigger }) => {
    return (
        <div className="listing-sort">
            <div className="listing-sort__left">
                {filteredResults.length === searchResults.length &&
                    <div className='listing-sort__item'>
                        Showing {filteredResults.length} results
                    </div>
                }
                {filteredResults.length < searchResults.length &&
                    <div className='listing-sort__item'>
                        <span>Showing {filteredResults.length} of</span>
                        <button
                            className="listing-sort__link"
                            type="button"
                            onClick={() => { setResetTrigger(!resetTrigger) }}
                        >
                            {searchResults.length} results
                        </button>
                    </div>
                }
            </div>
            <div className="listing-sort__right">
                <div className="listing-sort__item">
                    Sort by:
                    <select
                        className="listing-sort__select"
                        value={sortType}
                        onChange={(event) => { setSortType(event.target.value) }}
                    >
                        <option value="lowest price">Lowest price</option>
                        <option value="highest price">Highest price</option>
                        <option value="fastest">Fastest</option>
                    </select>
                </div>
                <div className="listing-sort__item">
                    Display by:
                    <select
                        className="listing-sort__select"
                        value={numberOfResults}
                        onChange={(event) => setNumberOfResults(parseInt(event.target.value))}
                    >
                        <option value="1">1</option>
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default ListingSort;