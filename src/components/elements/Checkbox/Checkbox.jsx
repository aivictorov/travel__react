import './Checkbox.scss';
import { addClass } from '../../../utils/functions';

const Checkbox = ({ name, text, style, checked, onChangeFunction }) => {
    if (!text) text = name;

    const add = addClass('checkbox', style);

    return (
        <div className={'checkbox' + add}>
            <label className="checkbox__label">
                <input
                    className="checkbox__hidden visually-hidden"
                    type="checkbox"
                    name={name}
                    checked={checked}
                    onChange={onChangeFunction}
                />
                <div className="checkbox__custom" />
                <div className="checkbox__description">
                    {text}
                </div>
            </label>
        </div>
    );
}

export default Checkbox;