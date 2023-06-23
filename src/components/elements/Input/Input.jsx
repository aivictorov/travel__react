import './Input.scss';

const Input = ({ type, label, placeholder, defaultValue, value, onChangeFunction, onFocusFunction, onBlurFunction }) => {

    return (
        <div className="input">
            <input
                className="input__field"
                type={type || 'text'}
                placeholder={placeholder}
                defaultValue={defaultValue}
                value={value}
                onChange={(event) => { 
                    onChangeFunction(event.target.value);
                }}
                onFocus={onFocusFunction}
                onBlur={onBlurFunction}
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