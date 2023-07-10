import './ButtonLink.scss';
import { addClass } from '../../../utils/functions';

const ButtonLink = ({ text, style, action }) => {

    const add = addClass('button-link', style)

    return (
        <button
            className={"button-link" + add}
            type="button"
            onClick={action}
        >
            {text}
        </button>
    );
}

export default ButtonLink;