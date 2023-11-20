import React, {useState} from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Signup = () => {
  const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let history = useHistory();
  const handleSubmit =async(e)=>{
    e.preventDefault();
   const response=await fetch("http://localhost:5500/v1/user/create-user",{
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
    
   },
   body: JSON.stringify({email: credentials.email, password: credentials.password})
});
const json = await response.json()
console.log(json);
if (json.success){
    // Save the auth token and redirect
    localStorage.setItem('token', json.token); 
    history.push("/");

}
else{
    alert("Invalid credentials");
}
}

const onChange = (e)=>{
setCredentials({...credentials, [e.target.name]: e.target.value})
}
  return (
    <div>
      <div className='container'>
           <form onSubmit={handleSubmit}> 
  <div class="mb-3">
    <label htmlFor="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name" onChange={onChange} aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label htmlFor="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" onChange={onChange} aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label htmlFor="password" class="form-label">Password</label>
    <input type="password" class="form-control" onChange={onChange} id="password1"/>
  </div>
  <div class="mb-3">
    <label htmlFor="cpassword" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" onChange={onChange} id="cpassword"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>  
    </div>
  )
}

export default Signup;
