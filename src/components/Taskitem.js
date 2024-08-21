import React from 'react'

const Taskitem = (props) => { 

  return (
    <div className='taskitem'
    onClick={()=> props.deleteitem(props.id)}>
        <li>{props.text}</li>
    </div>
  )
}


export default Taskitem