import React,{useState,useRef} from "react";
import axios from "axios";

export default function Login()
{
    const[info,setInfo]=useState({em:'',pwd:''});
    const ref1=useRef();

    const valchng=(e)=>{
        setInfo({...info,[e.target.name]:e.target.value});
    }

    const check=(e)=>{
        axios.post('https://reqres.in/api/login',{email:info.em,password:info.pwd})
        .then((res)=>{
            console.log(res.data);
            localStorage.setItem('tokenid',res.data.token);
            ref1.current.innerText="User is valid!";
        })
        .catch(
            (err)=>{
                console.log(err);
                ref1.current.innerText="user is invalid!";
            }
        )
    }
    return(
        <>
          Enter email:
          <input type="email" name="em" onChange={valchng} />
          <br></br>
          Enter password :
          <input type="password" name="pwd" onChange={valchng}/>
          <br></br>
          <button onClick={check}>Login</button>
           <h3 ref={ref1}></h3>
        </>
    )
}