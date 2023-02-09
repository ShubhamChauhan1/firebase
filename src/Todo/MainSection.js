import React, { useState } from 'react'
import Inbox from './Inbox'
import Next7Days from './Next7Days'
import Today from './Today'

const list =[
  {number:1,title:"Lets Complete this",date:new Date("01/25/2023")}
]

export default function MainSection(props) {
  const [filteredList,setFilteredlist] = useState(list)
  const addToList =(obj)=>{
    list.push(obj)
    setFilteredlist(list)
  }
  const removefromlist=(index)=>{
    const updatedList = filteredList.filter((item)=>{
      return item.number != index
    })
    setFilteredlist(updatedList)
  }
  return (
    <div className='main-section'>
      {props.active === "INBOX" && (
        <Inbox list={filteredList} append={addToList} delete={removefromlist}/>
      )}
      {props.active === "TODAY" && <Today list={filteredList}/>}
      {props.active === "NEXT" && <Next7Days list={filteredList}/>}
      
    </div>
  )
}