import './FlightFilters.scss';
import { useContext } from 'react';
import { AppContext } from './../../../pages/FlightListing';

const FlightFilters = ({ minPrice, maxPrice }) => {
    const { changeFilter } = useContext(AppContext);

    return (
        <div className="listing-filters">
            <h3 className="listing-filters__title">Filters</h3>
            <div className="filter-item">
                <div className="filter-item__header">
                    <h4 className="filter-item__title">Price</h4>
                    <button
                        className="filter-item__button"
                        type="button"
                        accordeon-button="Price"
                    >
                        <svg width={24} height={24}>
                            <use href="#arrow-down" />
                        </svg>
                    </button>
                </div>
                <div
                    className="filter-item__content filter-item__content--column"
                    accordeon-content="Price"
                >
                    <div className="dual-range-input">
                        <div className="dual-range-input__track-wrapper">
                            <div
                                className="dual-range-input__track"
                                data-name="track"
                            />
                            <input
                                data-name="range-1"
                                type="range"
                                min={minPrice}
                                max={maxPrice}
                                defaultValue={minPrice}
                                step={1}
                                onChange={(event) => { changeFilter({ minPrice: event.target.value }); }}
                            />
                            <input
                                data-name="range-2"
                                type="range"
                                min={minPrice}
                                max={maxPrice}
                                defaultValue={maxPrice}
                                step={1}
                                onChange={(event) => { changeFilter({ maxPrice: event.target.value }); }}
                            />
                        </div>
                        <div className="dual-range-input__values">
                            <span data-name="value-1">100$</span>
                            <span data-name="value-2">1500$</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="filter-item">
                <div className="filter-item__header">
                    <h4 className="filter-item__title">Departure Time</h4>
                    <button
                        className="filter-item__button"
                        type="button"
                        accordeon-button="Departure Time"
                    >
                        <svg width={24} height={24}>
                            <use href="#arrow-down" />
                        </svg>
                    </button>
                </div>
                <div
                    className="filter-item__content filter-item__content--column"
                    accordeon-content="Departure Time"
                >
                    <div className="dual-range-input">
                        <div className="dual-range-input__track-wrapper">
                            <div
                                className="dual-range-input__track"
                                data-name="track"
                            />
                            <input
                                data-name="range-1"
                                type="range"
                                min={50}
                                max={1200}
                                defaultValue={0}
                                step={1}
                            />
                            <input
                                data-name="range-2"
                                type="range"
                                min={50}
                                max={1200}
                                defaultValue={1200}
                                step={1}
                            />
                        </div>
                        <div className="dual-range-input__values">
                            <span data-name="value-1">100$</span>
                            <span data-name="value-2">1500$</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="filter-item">
                <div className="filter-item__header">
                    <h4 className="filter-item__title">Rating</h4>
                    <button
                        className="filter-item__button"
                        type="button"
                        accordeon-button="Rating"
                    >
                        <svg width={24} height={24}>
                            <use href="#arrow-down" />
                        </svg>
                    </button>
                </div>
                <div
                    className="filter-item__content filter-item__content--row"
                    accordeon-content="Rating"
                >
                    <div className="rating-filter-checkbox">
                        <label className="rating-filter-checkbox__label">
                            <input
                                className="rating-filter-checkbox__hidden visually-hidden"
                                type="checkbox"
                            />
                            <div
                                className="rating-filter-checkbox__custom"
                                style={{ width: 40 }}
                            >
                                0+
                            </div>
                        </label>
                    </div>
                    <div className="rating-filter-checkbox">
                        <label className="rating-filter-checkbox__label">
                            <input
                                className="rating-filter-checkbox__hidden visually-hidden"
                                type="checkbox"
                            />
                            <div
                                className="rating-filter-checkbox__custom"
                                style={{ width: 40 }}
                            >
                                1+
                            </div>
                        </label>
                    </div>
                    <div className="rating-filter-checkbox">
                        <label className="rating-filter-checkbox__label">
                            <input
                                className="rating-filter-checkbox__hidden visually-hidden"
                                type="checkbox"
                            />
                            <div
                                className="rating-filter-checkbox__custom"
                                style={{ width: 40 }}
                            >
                                2+
                            </div>
                        </label>
                    </div>
                    <div className="rating-filter-checkbox">
                        <label className="rating-filter-checkbox__label">
                            <input
                                className="rating-filter-checkbox__hidden visually-hidden"
                                type="checkbox"
                            />
                            <div
                                className="rating-filter-checkbox__custom"
                                style={{ width: 40 }}
                            >
                                3+
                            </div>
                        </label>
                    </div>
                    <div className="rating-filter-checkbox">
                        <label className="rating-filter-checkbox__label">
                            <input
                                className="rating-filter-checkbox__hidden visually-hidden"
                                type="checkbox"
                            />
                            <div
                                className="rating-filter-checkbox__custom"
                                style={{ width: 40 }}
                            >
                                4+
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div className="filter-item">
                <div className="filter-item__header">
                    <h4 className="filter-item__title">Airlines</h4>
                    <button
                        className="filter-item__button"
                        type="button"
                        accordeon-button="Airlines"
                    >
                        <svg width={24} height={24}>
                            <use href="#arrow-down" />
                        </svg>
                    </button>
                </div>
                <div
                    className="filter-item__content filter-item__content--column"
                    accordeon-content="Airlines"
                >
                    <div className="checkbox">
                        <label className="checkbox__label">
                            <input
                                className="checkbox__hidden visually-hidden"
                                type="checkbox"
                            />
                            <div className="checkbox__custom" />
                            <div className="checkbox__value"> Emirated</div>
                        </label>
                    </div>
                    <div className="checkbox">
                        <label className="checkbox__label">
                            <input
                                className="checkbox__hidden visually-hidden"
                                type="checkbox"
                            />
                            <div className="checkbox__custom" />
                            <div className="checkbox__value"> Fly Dubai</div>
                        </label>
                    </div>
                    <div className="checkbox">
                        <label className="checkbox__label">
                            <input
                                className="checkbox__hidden visually-hidden"
                                type="checkbox"
                            />
                            <div className="checkbox__custom" />
                            <div className="checkbox__value"> Qatar</div>
                        </label>
                    </div>
                    <div className="checkbox">
                        <label className="checkbox__label">
                            <input
                                className="checkbox__hidden visually-hidden"
                                type="checkbox"
                            />
                            <div className="checkbox__custom" />
                            <div className="checkbox__value"> Etihad</div>
                        </label>
                    </div>
                </div>
            </div>
            <div className="filter-item">
                <div className="filter-item__header">
                    <h4 className="filter-item__title">Trips</h4>
                    <button
                        className="filter-item__button"
                        type="button"
                        accordeon-button="Trips"
                    >
                        <svg width={24} height={24}>
                            <use href="#arrow-down" />
                        </svg>
                    </button>
                </div>
                <div
                    className="filter-item__content filter-item__content--column"
                    accordeon-content="Trips"
                >
                    <div className="checkbox">
                        <label className="checkbox__label">
                            <input
                                className="checkbox__hidden visually-hidden"
                                type="checkbox"
                            />
                            <div className="checkbox__custom" />
                            <div className="checkbox__value"> Round trip</div>
                        </label>
                    </div>
                    <div className="checkbox">
                        <label className="checkbox__label">
                            <input
                                className="checkbox__hidden visually-hidden"
                                type="checkbox"
                            />
                            <div className="checkbox__custom" />
                            <div className="checkbox__value"> On Way</div>
                        </label>
                    </div>
                    <div className="checkbox">
                        <label className="checkbox__label">
                            <input
                                className="checkbox__hidden visually-hidden"
                                type="checkbox"
                            />
                            <div className="checkbox__custom" />
                            <div className="checkbox__value"> Multi-City</div>
                        </label>
                    </div>
                    <div className="checkbox">
                        <label className="checkbox__label">
                            <input
                                className="checkbox__hidden visually-hidden"
                                type="checkbox"
                            />
                            <div className="checkbox__custom" />
                            <div className="checkbox__value">
                                {" "}
                                My Dates Are Flexible
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlightFilters;