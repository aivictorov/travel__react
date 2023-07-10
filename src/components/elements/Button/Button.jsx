import './Button.scss';
import { addClass } from '../../../utils/functions';

const Button = ({ text, type, style, icon, svgID, action }) => {
    const add = addClass('button', style);

    return (
        <button
            className={'button' + add}
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