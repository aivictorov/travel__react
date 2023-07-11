import './ButtonLink.scss';
import { addClass } from '../../../utils/functions';

const ButtonLink = ({ text, classes, action }) => {

    const add = addClass('button-link', classes)

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