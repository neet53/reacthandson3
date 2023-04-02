import React, { Component } from 'react'
import "./style.css";

        
class SubmitForm extends React.Component {
  constructor(props){
    super(props)
    console.log(props.data)
  }
 
  render() {  
  return (
    <div className='submit-page'>
     <div className='record-div'>   
      {this.props.records.map((ele)=>{
                const {name, department, rating} = ele
                 return (
                        <div className='showData'>
                            <p>Name: {name} | Department: {department} | Rating: {rating} </p>
                        </div>
                    )
      })}
      <br/>
     </div>
     <button  state={this.props} className='btn'><b>GO BACK</b> </button>
    </div>
  )
}
}
export default SubmitForm