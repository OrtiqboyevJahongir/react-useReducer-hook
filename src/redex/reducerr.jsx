

const reducerr = (state , {type}) =>{
    if(type==="START"){
        return{
            ...state,
            isCounting:true
        }
    }
    if(type==="STOP"){
        return{
            ...state,
            isCounting:false
        }
    }
    if(type==="RESET"){
        return{
            ...state,
            count:0
        }
    }
    if(type==="TICK"){
        return{
            ...state,
            count:state.count+1,
        }
    }
    return state;
}

export default reducerr