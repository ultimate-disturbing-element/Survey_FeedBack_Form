import React,{useState} from 'react'
import '../styles/SignUp.css';
import axios from './axios';


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

    const SubmitData = () => {
      const userObject = {
        name:details.name,
        email:details.email,
        password:details.password,
        age:details.age,
        gender:details.gender,
        user:details.user.toLowerCase()
      }
      axios.post("/api/v1/details",userObject).then((res)=>{
        console.log(res.data.details)
      }).catch((error)=>{
        console.log(error)
      });
      setDetails({
        name:"",email:"",password:"",age:"",gender:"",user:""
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
            <input type="text" name="user" value={details.user} onChange={onchangeDetails} placeholder="Enter User (coordinator or respondent)" />
          </form>

          <form className="login-form">
            <button type="button" onClick={SubmitData}>
              SIGN UP
            </button>
          </form>
        </div>
      </div>
      </>
    )
}


export default SignUp
