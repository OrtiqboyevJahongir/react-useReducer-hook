import { useEffect,useReducer, useState } from 'react'

import './App.css'
import reducerr from './redex/reducerr';

  function setDefaultValue(){
    const userCount = localStorage.getItem("count")
    return userCount ? +userCount : 0;
  }

function App() {

    const [{count , isCounting}, dispatch] = useReducer(reducerr , {count:setDefaultValue(),isCounting:false})
    useEffect(()=>{
      let timerId = null
      if (isCounting){
        timerId = setInterval(()=>{
          dispatch({type:"TICK"})
        },1000)
      }

        return() =>{
          timerId&&clearInterval(timerId)
          timerId=null;
        };

    },[isCounting])

  return (
    <div className="App shadow w-50 mx-auto mt-5  ">
        <h1 className='text-center p-2'>React:{count}</h1>
        {
          !isCounting?(
            <button className='btn btn-success d-block my-2 w-50 mx-auto' onClick={()=>dispatch({type:"START"})}>start </button>
          ):(
            <button  className='btn btn-danger d-block my-2 mx-auto w-50 ' onClick={()=>dispatch({type:"STOP"})}>
              stop
            </button>
          )
        }
        <button className='btn btn-info d-block mx-auto w-50  '  onClick={()=>dispatch({type:"RESET"})}>
          reset
        </button>
    </div>
  )
}

export default App
