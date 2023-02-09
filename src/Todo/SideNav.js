import React from 'react'

export default function SideNav(props) {
  return (
    <ul className='side-nav'>
      <li onClick={()=>{props.change("INBOX")}}>
        <div>INBOX</div><hr /><br />
      </li>
      <li onClick={()=>{props.change("TODAY")}}>
        <div>TODAY</div><hr /><br />
      </li>
      <li onClick={()=>{props.change("NEXT")}}>
        <div>NEXT 7 DAYS</div><hr /><br />
      </li>
      
    </ul>
  )
}