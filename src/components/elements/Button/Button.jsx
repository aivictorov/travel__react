import './Button.scss';

const Button = ({ text, type, style, icon, svgID, action }) => {
   
    let addClass = '';

    if (style) {
        const addClassArray = style.split([' ']);

        if (addClassArray.length > 0) {
            addClass = ' ' + addClassArray.map((item) => item = `button--${item}`).join(' ');
        };
    };

    return (
        <button
            className={'button' + addClass}
            type={type || 'button'}
            onClick={action}
        >
            {(icon || svgID) &&
                <div className="button__icon">
                    {icon &&
                        <img src={icon} alt="button-icon" />
                    }
                    {svgID &&
                        <svg width="16" height="16">
                            <use href={`#${svgID}`} />
                        </svg>
                    }
                </div>
            }
            {text}
        </button>
    );
}

export default Button;