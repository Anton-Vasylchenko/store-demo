import React from 'react'
import './SortFilter.scss';

const sortFilters = [
    { title: 'Імені', type: 'name' },
    { title: 'Кількості', type: 'count' }
];

function SortFilter({ onToggleSort }) {
    const [activeBtn, setActiveBtn] = React.useState(0);

    const toggleActive = (index, type) => {
        setActiveBtn(index);
        onToggleSort(type);
    }

    React.useEffect(() => {
        onToggleSort('count');
    }, [])

    return (
        <div className="sort-filter">
            <span>Сортувати по:</span>
            <ul>
                {sortFilters &&
                    sortFilters.map((el, index) => {
                        return <li
                            key={`${el.title}_${index}`}
                            className={activeBtn === index ? 'sort-active' : ''}
                            onClick={() => { toggleActive(index, el.type) }}> {el.title}
                        </li>
                    })
                }
            </ul>
        </div>
    );
}

export default SortFilter
