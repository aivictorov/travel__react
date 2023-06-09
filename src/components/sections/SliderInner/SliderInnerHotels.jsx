import './SliderInner.scss';
import bgImg from './../../../img/hotels/header.jpg';
import SearchForm from './../../blocks/SearchForm/SearchForm';

const SliderInnerHotels = () => {
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
                    <SearchForm page="hotel-search" />
                </div>
            </div>
        </div>
    );
}

export default SliderInnerHotels;