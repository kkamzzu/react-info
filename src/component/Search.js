import { useState } from 'react';
import { BiSearch, BiCaretDown, BiCheck } from 'react-icons/bi'



function DropDown({toggleSort,orderBy,onOrderChange,sortBy,onSortChange}) {
    if(!toggleSort){
        return null
    }
    return (
        <ul>
            <li  onClick={() => onSortChange('petName')}>애기이름
            {(sortBy === 'petName') && <BiCheck />}
            </li>
            <li onClick={()=> onSortChange('ownerName')}>예약자
            {(sortBy === 'ownerName') && <BiCheck />}
            </li>
            <li onClick ={()=> onSortChange('aptDate')}>날짜별
            {(sortBy === 'aptDate') && <BiCheck />}
            </li>
            <li onClick={()=> onOrderChange('asc')}>올림차순
            {(orderBy ==='asc') && <BiCheck />}
            </li>
            <li onClick ={()=> onOrderChange('desc')}>내림차순
            {(orderBy === 'desc') && <BiCheck />}
            

            </li>
        </ul>
    )
}



function Search({query,onQueryChange,onOrderChange,orderBy,sortBy,onSortChange}) {
    const [toggleSort, setToggleSort] = useState(false);
    return (
        <div id="search">
            <p>
                <BiSearch />
                <input 
                    type="text"
                    value={query}
                    onChange={event => {onQueryChange(event.target.value)}}
                    />
                <button type="button"
                    onClick={() => setToggleSort(!toggleSort)}>
                    정렬하기
                    <BiCaretDown />
                </button>
            </p>
            <DropDown 
                toggleSort = {toggleSort}
                    orderBy = {orderBy}
                    sortBy = {sortBy}
                    onOrderChange = {myOrder => onOrderChange(myOrder)}
                    onSortChange = {mySort => onSortChange(mySort)}
                />
        </div>
    )
}


export default Search;