import React,{useState} from 'react'
import '../styles/SignUp.css';

const SignUp = () => {
    const [details,setDetails] = useState({
        name:"",email:"",password:"",age:"",gender:"",user:""
    })

    const onchangeDetails = (e) => {
        const {value,name} = e.target;
        setDetails((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        })
    }
    return (
        <>
      <div className="login-page">
        <div className="form">
          <form>
            <lottie-player
              src="https://assets4.lottiefiles.com/datafiles/XRVoUu3IX4sGWtiC3MPpFnJvZNq7lVWDCa8LSqgS/profile.json"
              background="transparent"
              speed="1"
              style={{justifyContent: "center",margin:"auto",width:'190px'}}
              loop
              autoplay
            ></lottie-player>
            <input type="text" name="name" value={details.name} onChange={onchangeDetails} placeholder="Enter name" />
            <input type="text" name="email" value={details.email} onChange={onchangeDetails} placeholder="Enter email" />
            <input type="password" name="password"  value={details.password} onChange={onchangeDetails} placeholder="Enter password" />
            <input type="number" name="age" value={details.age} onChange={onchangeDetails} placeholder="Enter age" />
            <input type="text" name="gender"  value={details.gender} onChange={onchangeDetails} placeholder="Enter Gender" />
            <input type="text" name="user" value={details.user} onChange={onchangeDetails} placeholder="Enter User" />
          </form>

          <form className="login-form">
            <button type="button">
              SIGN UP
            </button>
          </form>
        </div>
      </div>
      </>
    )
}


export default SignUp
