import './SearchDropdown.scss';
import { forwardRef, useEffect } from 'react';

const SearchDropdown = forwardRef(({ list, onClickFunction }, ref) => {

    useEffect(() => {
        const closeDropdown = () => ref.current.classList.remove('active');

        const closeDropdownByKey = (event) => {
            if (event.key === 'Escape') closeDropdown();
        };

        document.addEventListener('click', closeDropdown);
        document.addEventListener('keydown', closeDropdownByKey);

        return () => {
            document.removeEventListener('click', closeDropdown);
            document.removeEventListener('keydown', closeDropdownByKey);
        };
    }, []);

    return (
        <div
            className="search-dropdown"
            ref={ref}
        >
            <ul>
                {list.map((item, index) => {
                    return (
                        <li
                            key={index}
                            data-value={item}
                            onClick={onClickFunction}
                        >
                            {item}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
})

export default SearchDropdown;