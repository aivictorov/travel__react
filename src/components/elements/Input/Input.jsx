import './Input.scss';

const Input = ({ name, style = 'form', type = 'text', label, placeholder, defaultValue, value, onChangeFunction, onFocusFunction, onClickFunction, validation = true, message, autocomplete = "on" }) => {

    return (
        <div className={`input input--${style}`}>
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
                autoComplete={autocomplete}
            />

            {label &&
                <div className="input__label">
                    {label}
                </div>
            }

            {/* <button
                className="input__icon"
                type="button"
                data-button="swap-button"
            >
                <svg width={24} height={24}>
                    <use href="#swap-icon"> </use>
                </svg>
            </button> */}

            {validation && message &&
                <div className="input__message">
                    {message}
                </div>
            }
        </div>
    );
}

export default Input;