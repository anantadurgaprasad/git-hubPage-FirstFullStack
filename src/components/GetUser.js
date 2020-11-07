import React,{useState} from 'react';
import axios from 'axios';

function GetUser(){
    const [username,setusername] = useState('');

   
  
    const submitEventt = (e)=>{
      e.preventDefault();
      
      const Username =  username;
      
  
      console.log(Username);
  
      axios.get('http://localhost:5000/users/'+Username)
        .then(res => console.log(res.data));
  
      setusername('')
    }


    return(
      <form>
      <div className="form-group">
        <label htmlFor='exampleInputUsername'>Username</label>
        <input type='text' className="form-control" id="exampleInputUsername" placeholder="Username"
        value={username}
        onChange={event => setusername(event.target.value)}/>
        <button  className="btn btn-primary" onClick={submitEventt} >Submit</button>
        </div>
</form>

    )
}

export default GetUser;