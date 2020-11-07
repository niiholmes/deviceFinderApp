import React from 'react';
import { useHistory } from 'react-router-dom'
import  '../css/SignUPContents.css'


const SignUPContents =()  => {
  const history = useHistory()
   return(
     <div className='form-mod'>


<form>
  <div className='form-group'>
  <input 
type="text" 
placeholder='Firstname'
className='form-control '
  /> 

  </div>



<div className='form-group'>
<input 
type="text"
 placeholder='Surname'
 className='form-control'
 />

</div>

<div className='form-group'>
<input 
type="text"
 placeholder='Device name'
 className='form-control'
 />

</div>

<div className='form-group'>
<input 
type="text"
 placeholder='Device model'
 className='form-control'
 />

</div>

<div className='form-group'>
<input 
type="text"
 placeholder='Device unique Number'
 className='form-control'
 />

</div>


<div className='form-group'>
<input 
type="email"
 placeholder='email'
 className='form-control'
 />

</div>


<div className='form-group'>
 <input 
type="password"
 placeholder='password'
 className='form-control'
 />
</div>

<div className='form-group'>
<input 
type="password"
 placeholder='confirm password'
 className='form-control'
 />

</div>

<br></br>

<div className='form-group'>
<button type='submit' onClick={() => {history.push('/dashboard')}}>
  Create
</button>

</div>




  
</form>

</div>
     

     
 

   )
   }


export default SignUPContents