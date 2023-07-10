import './ButtonSquare.scss';
import { addClass } from '../../../utils/functions';

const ButtonSquare = ({ type, style, svgID, action }) => {
    const add = addClass('square-button', style)
    const iconSize = add.includes('small') ? 20 : 24;

    return (
        <button
            className={'square-button' + add}
            type={type || 'button'}
            onClick={action}
        >
            <div className=".square-button__iconNew ">
                <svg width={iconSize} height={iconSize}>
                    <use href={`#${svgID}`} />
                </svg>
            </div>
        </button>
    );
}

export default ButtonSquare;