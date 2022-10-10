import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../common.css"

const BACKEND_URI = "http://localhost:3000/api/";

// functional component
function SignUpForm(props) {
    const [roll, setRoll] = useState("");
    const [password, setPassword] = useState("");  
    const [role, setRole] = useState(""); 
    return (
    <div className="center-div">
        <h1 className='text-center'>Sign Up</h1>
        <form className='form-group'>
            <label className='m-2 form-label'>Roll Number : </label>
            <br/>
            <input className='m-2 form-control' type="text" name="roll" autoComplete="off" value={roll} onChange={(e) => setRoll(e.target.value)}/>
            <br/>
            <label className='m-2 form-label'>Password : </label>
            <br/>
            <input className='m-2 form-control' type="password" name="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br/>        
            <label className='form-control'>Role : </label>
            <br/>
            <select className='form-control' autoComplete="off" name="role" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="ta">TA</option>
            </select>
            <br/>


        </form>
        <button className='btn btn-primary position-relative start-50 translate-middle-x' onClick={async (e) =>  {
                // send fetch (POST) request to server
                const requestOptions = {
                    method : 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body : JSON.stringify({ roll : roll, password : password, role : role })
                };

                var res = await fetch(BACKEND_URI + "register", requestOptions);
                alert((await res.json())["msg"]);
                setRoll("");
                setPassword("");
                setRole("");
            }}>Sign Up</button>
            <br/>
            <p className='m-4'>Already Registered ? <Link to='/login'> Login Here</Link></p> 
    </div>);
}

export default SignUpForm;