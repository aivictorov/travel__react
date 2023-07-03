import './Checkbox.scss';

const Checkbox = ({ name, action }) => {
    return (
        <div
            className="checkbox"
            key={name}
        >
            <label className="checkbox__label">
                <input
                    className="checkbox__hidden visually-hidden"
                    type="checkbox"
                    name={name}
                    onChange={action}
                />
                <div className="checkbox__custom" />
                <div className="checkbox__value">{name}</div>
            </label>
        </div>
    );
}

export default Checkbox;