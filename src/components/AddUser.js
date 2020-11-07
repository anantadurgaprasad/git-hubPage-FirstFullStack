import React,{useState} from 'react'
import axios from 'axios';

function AddUser() {
  const [Username,setUsername] = useState('');
  const [Email,setEmail]=useState('');
  const [Psd,setPsd] = useState('');


  const SubmitEvent=(e)=> {
    e.preventDefault();

    const user = {
      username: Username,
      email:Email,
      password:Psd
    }

    

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));
      setUsername ('')
      setEmail('')
      setPsd('')
    
  }


  return (
    

      <form>
  <div className="form-group">
    <label htmlFor='exampleInputUsername'>Username</label>
    <input type='text'
     className="form-control" 
     id="exampleInputUsername" 
     placeholder="Username"
     value={Username}
    onChange={event => setUsername(event.target.value)}/>
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" 
    className="form-control" 
    id="exampleInputEmail1"
     aria-describedby="emailHelp" 
     placeholder="Enter email"
     value={Email}
    onChange={event =>{ setEmail(event.target.value);
    }}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password"
     className="form-control"
      id="exampleInputPassword1"
       placeholder="Password" 
       value={Psd}
      onChange={event => setPsd(event.target.value)}/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button 
   className="btn btn-primary"
   onClick={SubmitEvent}>Submit</button>
</form>

    
  );
}
// type="submit"
export default AddUser;
