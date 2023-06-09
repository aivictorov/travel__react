import { useEffect, useState } from "react";

const ListingFilterPrice = ({ name, title, changeFilter }) => {

    const [params, setParams] = useState({});

    useEffect(() => {
        changeFilter({ [name]: params });
    }, [params])

    return (
        <div className="filter-item">
            <div className="filter-item__header">
                <h4 className="filter-item__title">
                    {title}
                </h4>
                <button
                    className="filter-item__button"
                    type="button"
                    accordeon-button={name}
                >
                    <svg width={24} height={24}>
                        <use href="#arrow-down" />
                    </svg>
                </button>
            </div>
            <div
                className="filter-item__content filter-item__content--column"
                accordeon-content={name}
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
                            min={0}
                            max={1000}
                            defaultValue={0}
                            step={1}
                            onChange={(event) => { setParams({ ...params, 'min': event.target.value }); }}
                        />
                        <input
                            data-name="range-2"
                            type="range"
                            min={0}
                            max={1000}
                            defaultValue={1000}
                            step={1}
                            onChange={(event) => { setParams({ ...params, 'max': event.target.value }); }}
                        />
                    </div>
                    <div className="dual-range-input__values">
                        <span data-name="value-1">{0}$</span>
                        <span data-name="value-2">{1000}$</span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ListingFilterPrice;