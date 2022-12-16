import {BiSearch,BiCaretDown,BiCheck} from 'react-icons/bi'

function DropDown(){
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



function Search(){
    return(
        <div id="search">
            <p>
            <BiSearch />
            <input />
            <button type="button"><BiCaretDown/></button>
            </p>
            <DropDown />
        </div>
    )
}


export default Search;