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
  const [appointList, setAppointList] = useState([])

  //정렬의 기본, search의 값
  const [query, setQuery] = useState('')


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
        appointList.reduce((max,item)=>  Number(item.id) > max ? Number(item.id) : max, 0)
      }
      /></div>
      <div><Search /></div>
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