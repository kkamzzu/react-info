import { useState } from 'react';
import { BiSearch, BiCaretDown, BiCheck } from 'react-icons/bi'



function DropDown({toggleSort}) {
    if(!toggleSort){
        return null
    }
    return (
        <ul>
            <li>애기이름</li>
            <li>예약자</li>
            <li>날짜별</li>
            <li>올림차순</li>
            <li>내림차순</li>
        </ul>
    )
}



function Search() {

    const [toggleSort, setToggleSort] = useState(false);

    return (
        <div id="search">
            <p>
                <BiSearch />
                <input />
                <button type="button"
                    onClick={() => setToggleSort(!toggleSort)}>
                    정렬하기
                    <BiCaretDown />
                </button>
            </p>
            <DropDown 
                toggleSort = {toggleSort}/>
        </div>
    )
}


export default Search;