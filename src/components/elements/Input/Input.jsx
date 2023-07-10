import './Input.scss';
import { useRef, useEffect } from 'react';
import { addClass } from '../../../utils/functions';

const Input = ({ name, style = 'form', type = 'text', label, placeholder, defaultValue, value, onChangeFunction, onFocusFunction, onClickFunction, validation = true, message, autocomplete = "on" }) => {

    const inputRef = useRef();

    useEffect(() => {
        if (message) inputRef.current.classList.add('error');
        if (!message) inputRef.current.classList.remove('error');
    }, [message])

    const add = addClass('input', style);

    return (
        <div className={'input' + add} ref={inputRef}>
            <input
                name={name}
                className="input__field"
                type={type}
                placeholder={placeholder}
                defaultValue={defaultValue}
                value={value}
                onChange={onChangeFunction}
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