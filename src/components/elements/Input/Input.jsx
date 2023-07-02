import './Input.scss';

const Input = ({ name, type = 'text', label, placeholder, defaultValue, value, onChangeFunction, onFocusFunction, onClickFunction }) => {

    return (
        <div className="input">
            <input
                name={name}
                className="input__field"
                type={type}
                placeholder={placeholder}
                defaultValue={defaultValue}
                value={value}
                onChange={(event) => onChangeFunction(event.target.value)}
                onFocus={onFocusFunction}
                onClick={onClickFunction}
            />
            <div className="input__label">
                {label}
            </div>
            {/* <button
                className="input__icon"
                type="button"
                data-button="swap-button"
            >
                <svg width={24} height={24}>
                    <use href="#swap-icon"> </use>
                </svg>
            </button> */}
        </div>
    );
}

export default Input;