//컴포넌트
import AddApointment from './component/AddApointment';
import AddInfo from './component/AddInfo';
import Search from './component/Search';

//목업
// import AppointData from './data.json';

import { BiArchiveIn } from 'react-icons/bi'
import './App.css'
import { useCallback, useEffect, useState } from 'react';

function App() {
  //state
  //기본배열 변경 되는 얘들
  const [appointList, setAppointList] = useState([]);

  //정렬의 기본, search의 값
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('petName');
  const [orderBy,setOrderBy] = useState('asc');


  //function
  //callBackt 
  const filterAppointment = appointList.filter(
    item => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      )
    }
  ).sort(
    (a,b) => {
      let order = (orderBy === 'asc' ? 1 : -1)
      return (
        a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 * order : 1 * order
      )
    }
  )

  const fetchData = useCallback(
    () => {
      fetch('./data.json', {
        headers: {
          Accept: {
            Accept: 'application/json'
          }
        }
      })
        .then(response => response.json())
        .then(data => setAppointList(data))
    }, []
  )

  //useEffec
  useEffect(() => { fetchData() }, [fetchData])

  return (
    <article>
      <h3><BiArchiveIn style={{ color: '#4495f7' }} />예약시스템</h3>
      <div><AddApointment 
      onSendAppointment={
        myAppointment => setAppointList([...appointList,myAppointment])
      }
      lastId = {
        appointList.reduce((max,item)=>  Number(item.id) > max ? Number(item.id) : max, 0)  //:=> 왼쪽이 조건 성립할 떄, 오른쪽은 조건이 성립이 안할 때
      }
      /></div>
      
      <Search 
      query= {query}
      onQueryChange = {myQuery =>setQuery(myQuery)}

      sortBy = {sortBy}
      onSortChange = {mySort =>setSortBy(mySort)}

      orderBy = {orderBy}
      onOrderChange = {myOrder =>setOrderBy(myOrder)}
      />
      <div id="list">

        <ul>
          {filterAppointment.map(appointment =>
          (<AddInfo
              key={appointment.id}
              appointment= {appointment} 
              onDeleteAppoint = {appointmentId => setAppointList(
                appointList.filter(
                      appointment => appointment.id !== appointmentId ))}
              />))
              
          }
        </ul>
      </div>
    </article>
  );
}

export default App; 