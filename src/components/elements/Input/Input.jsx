import './Input.scss';
import { useRef } from 'react';
import { useEffect } from 'react';

const Input = ({ name, style = 'form', type = 'text', label, placeholder, defaultValue, value, onChangeFunction, onFocusFunction, onClickFunction, validation = true, message, autocomplete = "on" }) => {

    const inputRef = useRef();

    useEffect(() => {
        if (message) inputRef.current.classList.add('error');
        if (!message) inputRef.current.classList.remove('error');
     }, [message])

    return (
        <div className={`input input--${style}`} ref={inputRef}>
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