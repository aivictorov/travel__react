import { useContext } from "react";
import { FlightListingContext } from "../../../pages/FlightListing";

const ListingFilterRadioButtons = ({ name, title, min, max }) => {
    const { changeFilter } = useContext(FlightListingContext);

    if (max - min >= 1) {
        const buttons = [];

        for (let index = Math.floor(min); index <= Math.floor(max); index++) {
            let item;

            if (index != max) {
                item = { value: index, text: `${index}+` };
            } else {
                item = { value: index, text: index };
            };
            
            buttons.push(item);
        }

        return (
            <div className="filter-item">
                <div className="filter-item__header">
                    <h4 className="filter-item__title">{title}</h4>
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
                    {buttons.map((button) => {
                        return (
                            <div
                                className="rating-filter-checkbox"
                                key={button.value}
                            >
                                <label className="rating-filter-checkbox__label">
                                    <input
                                        className="rating-filter-checkbox__hidden visually-hidden"
                                        name={name}
                                        type="radio"
                                        value={button.value}
                                        onChange={(event) => { changeFilter({ [name]: event.target.value }) }}
                                    />
                                    <div
                                        className="rating-filter-checkbox__custom"
                                        style={{ width: 40 }}
                                    >
                                        {button.text}
                                    </div>
                                </label>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    };
}

export default ListingFilterRadioButtons;