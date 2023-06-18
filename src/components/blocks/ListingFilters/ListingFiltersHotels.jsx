import ListingFilterDualRange from './ListingFilterDualRange';
import ListingFilterRadioButtons from './ListingFilterRadioButtons';

const ListingFiltersHotels = ({ filterParams, changeFilter, resetTrigger }) => {
    
    return (
        <>
            <ListingFilterDualRange
                name='price2'
                title='Price2'
                min={filterParams.price.min}
                max={filterParams.price.max}
                format='price'
                changeFilter={changeFilter}
                resetTrigger={resetTrigger}
            />
            <ListingFilterRadioButtons
                name='rating2'
                title='Rating2'
                min={filterParams.rating.min}
                max={filterParams.rating.max}
                changeFilter={changeFilter}
                resetTrigger={resetTrigger}
            />
        </>
        // <div className="listing-filters">
        //     <h3 className="listing-filters__title">Filters</h3>
        //     <div className="filter-item">
        //         <div className="filter-item__header">
        //             <h4 className="filter-item__title">Price</h4>
        //             <button
        //                 className="filter-item__button"
        //                 type="button"
        //                 accordeon-button="Price"
        //             >
        //                 <svg width={24} height={24}>
        //                     <use href="#arrow-down" />
        //                 </svg>
        //             </button>
        //         </div>
        //         <div
        //             className="filter-item__content filter-item__content--column"
        //             accordeon-content="Price"
        //         >
        //             <div className="dual-range-input">
        //                 <div className="dual-range-input__track-wrapper">
        //                     <div
        //                         className="dual-range-input__track"
        //                         data-name="track"
        //                     />
        //                     <input
        //                         data-name="range-1"
        //                         type="range"
        //                         min={50}
        //                         max={1200}
        //                         defaultValue={0}
        //                         step={1}
        //                     />
        //                     <input
        //                         data-name="range-2"
        //                         type="range"
        //                         min={50}
        //                         max={1200}
        //                         defaultValue={1200}
        //                         step={1}
        //                     />
        //                 </div>
        //                 <div className="dual-range-input__values">
        //                     <span data-name="value-1">100$</span>
        //                     <span data-name="value-2">1500$</span>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="filter-item">
        //         <div className="filter-item__header">
        //             <h4 className="filter-item__title">Rating</h4>
        //             <button
        //                 className="filter-item__button"
        //                 type="button"
        //                 accordeon-button="Rating"
        //             >
        //                 <svg width={24} height={24}>
        //                     <use href="#arrow-down" />
        //                 </svg>
        //             </button>
        //         </div>
        //         <div
        //             className="filter-item__content filter-item__content--row"
        //             accordeon-content="Rating"
        //         >
        //             <div className="rating-filter-checkbox">
        //                 <label className="rating-filter-checkbox__label">
        //                     <input
        //                         className="rating-filter-checkbox__hidden visually-hidden"
        //                         type="checkbox"
        //                     />
        //                     <div
        //                         className="rating-filter-checkbox__custom"
        //                         style={{ width: 40 }}
        //                     >
        //                         0+
        //                     </div>
        //                 </label>
        //             </div>
        //             <div className="rating-filter-checkbox">
        //                 <label className="rating-filter-checkbox__label">
        //                     <input
        //                         className="rating-filter-checkbox__hidden visually-hidden"
        //                         type="checkbox"
        //                     />
        //                     <div
        //                         className="rating-filter-checkbox__custom"
        //                         style={{ width: 40 }}
        //                     >
        //                         1+
        //                     </div>
        //                 </label>
        //             </div>
        //             <div className="rating-filter-checkbox">
        //                 <label className="rating-filter-checkbox__label">
        //                     <input
        //                         className="rating-filter-checkbox__hidden visually-hidden"
        //                         type="checkbox"
        //                     />
        //                     <div
        //                         className="rating-filter-checkbox__custom"
        //                         style={{ width: 40 }}
        //                     >
        //                         2+
        //                     </div>
        //                 </label>
        //             </div>
        //             <div className="rating-filter-checkbox">
        //                 <label className="rating-filter-checkbox__label">
        //                     <input
        //                         className="rating-filter-checkbox__hidden visually-hidden"
        //                         type="checkbox"
        //                     />
        //                     <div
        //                         className="rating-filter-checkbox__custom"
        //                         style={{ width: 40 }}
        //                     >
        //                         3+
        //                     </div>
        //                 </label>
        //             </div>
        //             <div className="rating-filter-checkbox">
        //                 <label className="rating-filter-checkbox__label">
        //                     <input
        //                         className="rating-filter-checkbox__hidden visually-hidden"
        //                         type="checkbox"
        //                     />
        //                     <div
        //                         className="rating-filter-checkbox__custom"
        //                         style={{ width: 40 }}
        //                     >
        //                         4+
        //                     </div>
        //                 </label>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="filter-item">
        //         <div className="filter-item__header">
        //             <h4 className="filter-item__title">Freebies</h4>
        //             <button
        //                 className="filter-item__button"
        //                 type="button"
        //                 accordeon-button="Freebies"
        //             >
        //                 <svg width={24} height={24}>
        //                     <use href="#arrow-down" />
        //                 </svg>
        //             </button>
        //         </div>
        //         <div
        //             className="filter-item__content filter-item__content--column"
        //             accordeon-content="Freebies"
        //         >
        //             <div className="checkbox">
        //                 <label className="checkbox__label">
        //                     <input
        //                         className="checkbox__hidden visually-hidden"
        //                         type="checkbox"
        //                     />
        //                     <div className="checkbox__custom" />
        //                     <div className="checkbox__value"> Free breakfast</div>
        //                 </label>
        //             </div>
        //             <div className="checkbox">
        //                 <label className="checkbox__label">
        //                     <input
        //                         className="checkbox__hidden visually-hidden"
        //                         type="checkbox"
        //                     />
        //                     <div className="checkbox__custom" />
        //                     <div className="checkbox__value"> Free parking</div>
        //                 </label>
        //             </div>
        //             <div className="checkbox">
        //                 <label className="checkbox__label">
        //                     <input
        //                         className="checkbox__hidden visually-hidden"
        //                         type="checkbox"
        //                     />
        //                     <div className="checkbox__custom" />
        //                     <div className="checkbox__value"> Free internet</div>
        //                 </label>
        //             </div>
        //             <div className="checkbox">
        //                 <label className="checkbox__label">
        //                     <input
        //                         className="checkbox__hidden visually-hidden"
        //                         type="checkbox"
        //                     />
        //                     <div className="checkbox__custom" />
        //                     <div className="checkbox__value">
        //                         {" "}
        //                         Free airport shuttle
        //                     </div>
        //                 </label>
        //             </div>
        //             <div className="checkbox">
        //                 <label className="checkbox__label">
        //                     <input
        //                         className="checkbox__hidden visually-hidden"
        //                         type="checkbox"
        //                     />
        //                     <div className="checkbox__custom" />
        //                     <div className="checkbox__value"> Free cancellation</div>
        //                 </label>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="filter-item">
        //         <div className="filter-item__header">
        //             <h4 className="filter-item__title">Amenities</h4>
        //             <button
        //                 className="filter-item__button"
        //                 type="button"
        //                 accordeon-button="Amenities"
        //             >
        //                 <svg width={24} height={24}>
        //                     <use href="#arrow-down" />
        //                 </svg>
        //             </button>
        //         </div>
        //         <div
        //             className="filter-item__content filter-item__content--column"
        //             accordeon-content="Amenities"
        //         >
        //             <div className="checkbox">
        //                 <label className="checkbox__label">
        //                     <input
        //                         className="checkbox__hidden visually-hidden"
        //                         type="checkbox"
        //                     />
        //                     <div className="checkbox__custom" />
        //                     <div className="checkbox__value"> 24hr front desk</div>
        //                 </label>
        //             </div>
        //             <div className="checkbox">
        //                 <label className="checkbox__label">
        //                     <input
        //                         className="checkbox__hidden visually-hidden"
        //                         type="checkbox"
        //                     />
        //                     <div className="checkbox__custom" />
        //                     <div className="checkbox__value"> Air-conditioned</div>
        //                 </label>
        //             </div>
        //             <div className="checkbox">
        //                 <label className="checkbox__label">
        //                     <input
        //                         className="checkbox__hidden visually-hidden"
        //                         type="checkbox"
        //                     />
        //                     <div className="checkbox__custom" />
        //                     <div className="checkbox__value"> Fitness</div>
        //                 </label>
        //             </div>
        //             <div className="checkbox">
        //                 <label className="checkbox__label">
        //                     <input
        //                         className="checkbox__hidden visually-hidden"
        //                         type="checkbox"
        //                     />
        //                     <div className="checkbox__custom" />
        //                     <div className="checkbox__value"> Pool</div>
        //                 </label>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default ListingFiltersHotels;