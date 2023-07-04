import './Checkbox.scss';

const Checkbox = ({ name, text, checked, onChangeFunction }) => {

    if (!text) text = name;

    return (
        <div className="checkbox">
            <label className="checkbox__label">
                <input
                    className="checkbox__hidden visually-hidden"
                    type="checkbox"
                    name={name}
                    checked={checked}
                    onChange={(event) => { onChangeFunction(event.target.checked) }}
                />
                <div className="checkbox__custom" />
                <div className="checkbox__text">{text}</div>
            </label>
        </div>
    );
}

export default Checkbox;