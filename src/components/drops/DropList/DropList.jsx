import './DropList.scss';

const DropList = ({ list, onClose, setValue }) => {

    if (!list || list.length === 0) return null;

    return (
        <ul className="droplist">
            {list.map((item, index) => {
                return (
                    <li
                        className="droplist-item"
                        key={index}
                        data-value={item}
                        onClick={(event) => {
                            setValue(event.target.dataset.value);
                            onClose();
                        }}
                    >
                        {item}
                    </li>
                )
            })}
        </ul>
    );
}

export default DropList;