import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:'55px'}}>
    {props.alert && <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>{props.alert.msg}</strong> 
    
  </div>}
  </div>
  )
}
