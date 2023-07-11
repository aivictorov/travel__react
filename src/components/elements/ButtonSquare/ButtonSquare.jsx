import './ButtonSquare.scss';
import { addClass } from '../../../utils/functions';

const ButtonSquare = ({ type, classes, svgID, action }) => {
    const add = addClass('square-button', classes)
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