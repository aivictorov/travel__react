import './SearchFormButtons.scss';
import Button from "../../elements/Button/Button";

const SearchFormButtons = ({ layout, action }) => {
    return (
        <div className="search-form__buttons">
            <div className="search-form__add-button-wrapper">
                <Button text='Add Promo Code' style="transparent w100" svgID="add-icon" />
            </div>

            {layout === 'flights' &&
                <Button
                    text='Show Filghts'
                    svgID='send-icon'
                    action={action}
                />
            }

            {layout === 'hotels' &&
                <Button
                    text='Show Places'
                    svgID='building-icon'
                    action={action}
                />
            }
        </div>
    );
};

export default SearchFormButtons;