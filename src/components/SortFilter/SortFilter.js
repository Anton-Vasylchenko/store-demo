import React from 'react';
import SortOrderArrow from '../SortOrderArrow';

import './SortFilter.scss';

const sortFilters = [
    { title: 'Name', type: 'name' },
    { title: 'Quantity', type: 'count' }
];

function SortFilter({ onToggleSort }) {
    const [activeBtn, setActiveBtn] = React.useState(0);
    const [activeType, setActiveType] = React.useState('name');
    const [activeOrderBy, setActiveOrderBy] = React.useState('asc');

    const toggleActive = (index, type) => {
        setActiveBtn(index);
        setActiveType(type);
        onToggleSort(type, activeOrderBy);
    }

    const changeOrderType = (newType) => {
        setActiveOrderBy(newType);
        onToggleSort(activeType, newType);
    }

    return (
        <div className="sort-filter">
            <SortOrderArrow order={activeOrderBy} changeType={changeOrderType} />
            <span>Sort by:</span>
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
