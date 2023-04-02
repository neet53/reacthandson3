import React , { useState} from 'react';

import "./style.css";


const Form = () => {
    const [formData, setState]= useState("");

    const [data, setNext] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState(values => ({...values, [name]: value}));

        
      };
    const [records, setRecord]= useState([])
       
    const  handleSubmit = (event)=>{
        event.preventDefault();
        const newRecord = {...formData}
        setRecord([...records, newRecord]);
        setState({ Name: "" , Department:"", Rating:""});
        setNext(true)
       
    };

    const goback = () =>{
      setNext(false);

    }
   
  return (
    <div>
      <div>
        {
        data ? null :
          <form onSubmit={handleSubmit}>
            
            <br/> <br/>

            <label> Name :</label>
            <input type="text"  name="name" value={formData.name} onChange={handleChange} />
          
            <br/> <br/>

            <label>Department :</label>
            <input type="text"  name="department" value={formData.dept} onChange={handleChange}  />
            
            <br/> <br/>

            <label> Rating  :</label>
            <input type="number" name="rating" value={formData.rat} onChange={handleChange} />
            
            <br/> <br/> 

            <button type='submit'><b>SUBMIT</b></button>
            
          </form>
    }
      </div>
        {
        data ?
        <div>
          <div className='record-div' >
          {
            records.map((ele) =>{
                // console.log(ele)
                const {name, department, rating} = ele
                return(
                    <div className="showData">
                        <p>Name: {name} | Department: {department} | Rating: {rating} </p>
                    </div>
                )
            })
        }
          </div>
        {data ? <input id="submit" onClick={goback} type="button" value="Go Back " />:null }
        
        </div>:null
        }
    </div>
  );
}

export default Form