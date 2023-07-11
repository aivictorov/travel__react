import './SectionHeader.scss';
import Button from "../../elements/Button/Button";

const SectionHeader = ({ title, text, button, action }) => {
    return (
        <div className="section-header">
            <div className="section-header__left">
                <h2 className="section-header__title">{title}</h2>
                {text &&
                    <div className="section-header__subtitle">{text}</div>
                }
            </div>
            {button &&
                <div className="section-header__right section-header__button-wrapper">
                    <Button text={button} classes="border h100" action={action} />
                </div>
            }
        </div>
    );
}

export default SectionHeader;