import './SliderInner.scss';

const SliderInner = ({bgImg}) => {
    return (
        <div className="slider-inner">
            <div className="slider-inner__background">
                <img src={bgImg} alt="hotels" />
            </div>
            <div className="container">
                <div className="slider-inner__content">
                    <h1 className="slider-inner__title">
                        Make your travel whishlist, we’ll do the rest
                    </h1>
                    <div className="slider-inner__text">
                        Special offers to suit your plan
                    </div>
                </div>
            </div>
            <div className="slider-inner__form-wrapper">
                <div className="container">
                    <div className="search-form search-form--full" tabs="search">
                        <div className="search-form__title">Where are you flying? </div>
                        <div
                            className="search-form__content"
                            tab-content="hotel-search"
                            tab-group="search"
                        >
                            <div className="search-form__fields">
                                <div
                                    className="input"
                                    style={{ width: "calc(100% - 3 * 240px - 3 * 16px)" }}
                                >
                                    <input
                                        className="input__field"
                                        type="text"
                                        defaultValue="Istanbul, Turkey"
                                    />
                                    <div className="input__label">Enter Destination</div>
                                </div>
                                <div className="input" style={{ width: 240 }}>
                                    <input
                                        className="input__field"
                                        type="text"
                                        defaultValue="Fri 12/2"
                                    />
                                    <div className="input__label">Check In</div>
                                    <button className="input__icon" type="button">
                                        <svg width={24} height={24}>
                                            <use href="#calendar-icon"> </use>
                                        </svg>
                                    </button>
                                </div>
                                <div className="input" style={{ width: 240 }}>
                                    <input
                                        className="input__field"
                                        type="text"
                                        defaultValue="Sun 12/4"
                                    />
                                    <div className="input__label">Check Out</div>
                                    <button className="input__icon" type="button">
                                        <svg width={24} height={24}>
                                            <use href="#calendar-icon"> </use>
                                        </svg>
                                    </button>
                                </div>
                                <div className="input" style={{ width: 240 }}>
                                    <input
                                        className="input__field"
                                        type="text"
                                        defaultValue="1 room, 2 guests"
                                    />
                                    <div className="input__label">Rooms &amp; Guests</div>
                                </div>
                            </div>
                            <div className="search-form__buttons">
                                <button className="search-form__add-button" type="button">
                                    <svg width={16} height={16}>
                                        <use href="#add-icon" />
                                    </svg>
                                    Add Promo Code
                                </button>
                                <button className="button" type="button">
                                    <div className="button__icon">
                                        <svg width={16} height={16}>
                                            <use href="#building-icon" />
                                        </svg>
                                    </div>
                                    Show Places
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SliderInner;