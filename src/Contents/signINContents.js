import React from 'react'
import { useHistory } from 'react-router-dom'
import '../css/SignINContents.css'


const SignINContents = () => {
  const history = useHistory()
    return(

    <div className='form-mod'>

    <input 
      type="text" 
      placeholder='Firstname'
      className='searchField1'
    /> <br></br>
      <br></br>


    <input 
      type="text"
      placeholder='Surname'
      className='searchField2'
    />
      <br></br>
      <br></br>

    <input 
      type="submit" 
      value="Submit"
      className=''
      onClick={() => history.push('/dashboard')}
    />

</div>
    )
}

export default SignINContents