import './ButtonLink.scss';

const ButtonLink = ({ text, style, action }) => {

    let addClass = '';
    if (style === 'bold') addClass = ' button-link--bold'

    return (
        <button
            className={"button-link" + addClass}
            type="button"
            onClick={action}
        >
            {text}
        </button>
    );
}

export default ButtonLink;