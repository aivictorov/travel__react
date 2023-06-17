import './ListingFilters.scss';
import ListingFilterDualRange from './ListingFilterDualRange';
import ListingFilterRadioButtons from './ListingFilterRadioButtons';
import ListingFilterCheckboxes from './ListingFilterCheckboxes';

const ListingFilters = ({ layout, filterParams, changeFilter, reset }) => {

    console.log(changeFilter);

    if (layout === 'flights') {
        return (
            <>
                <ListingFilterDualRange
                    name='price'
                    title='Price'
                    min={filterParams.price.min}
                    max={filterParams.price.max}
                    format='price'
                    changeFilter={changeFilter}
                    reset={reset}
                />
                {/* <ListingFilterDualRange
                    name='time'
                    title='Departure time'
                    format='time'
                /> */}
                <ListingFilterRadioButtons
                    name='rating'
                    title='Rating'
                    min={filterParams.rating.min}
                    max={filterParams.rating.max}
                    changeFilter={changeFilter}
                    reset={reset}
                />
                <ListingFilterCheckboxes
                    name='airlines'
                    title='Airlines'
                    items={filterParams.airlines}
                    changeFilter={changeFilter}
                    reset={reset}
                />
            </>
        );
    };

    if (layout === 'hotels') {
        return (
            <>
                <ListingFilterDualRange
                    name='price2'
                    title='Price2'
                    min={filterParams.price.min}
                    max={filterParams.price.max}
                    format='price'
                    changeFilter={changeFilter}
                    reset={reset}
                />
                <ListingFilterRadioButtons
                    name='rating2'
                    title='Rating2'
                    min={filterParams.rating.min}
                    max={filterParams.rating.max}
                    changeFilter={changeFilter}
                    reset={reset}
                />
            </>
        )
    };
};

export default ListingFilters;