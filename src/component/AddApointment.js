
import {BiCalendarHeart} from 'react-icons/bi'

function AddWrite(){
  return (
    <>
    <ul>
      <li>
        <label htmlFor="userName">집사명</label>
        <input type="text" id="userName" />
      </li>
      <li>
        <label htmlFor="userChildren">애기명</label>
        <input type="text" id="userChildren" />
      </li>
      <li>
        <label htmlFor="userDate">예약일</label>
        <input type="date" is="userDate" />
      </li>
      <li>
        <label htmlFor="userTime">예약시간</label>
        <input type="time" id="userTime" />
      </li>
      <li>
        <label htmlFor="userDes">기타설명</label>
        <textarea cols="30" rolse="10"></textarea>
      </li>
    </ul>
    <p>
      <button type="submit">제출</button>
    </p>
    </>

  )
}




function AddApointment(){
  return (
    <div id="appoint">
     <h4><BiCalendarHeart/>예약하기</h4>
     <AddWrite />
      </div>
  )
}

export default AddApointment;