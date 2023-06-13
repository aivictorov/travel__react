import './ButtonSquare.scss';

const ButtonSquare = ({ type, style, svgID, action }) => {
    let addClass = '';
    let addClassArray = [];

    if (style) {
        addClassArray = style.split([' ']);

        if (addClassArray.length > 0) {
            addClass = ' ' + addClassArray.map((item) => item = `buttonNew--${item}`).join(' ');
        };
    };
    
    const iconSize = addClassArray.includes('small') ? 20 : 24;

    return (
        <button
            className={'square-buttonNew' + addClass}
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