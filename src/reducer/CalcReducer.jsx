import { useReducer } from "react";

const initialState = {
    result : "",
    operation : "",
    a : "",
    b : "",
    switch : false,
}

function calcResult({a, b, operation}){
    const numA = parseInt(a);
    const numB = parseInt(b);
    switch(operation){
        case "*" :
            return (numA * numB);
        
        case "+" :
            return (numA + numB);

        case "-" :
            return (numA - numB);
        
        default:
            return 0
    }
}

function reducer (state,action){
    switch(action.type) {

        case "ADD_NUMBER" : 
            if(!state.switch){
                return {
                    ...state,
                    a : state.a + action.payload.label,
                }                   
            }else{
                return {
                    ...state,
                    b : state.b + action.payload.label,
                }         
            }
        
        
        case "OPERATION" :
            if(state.b != ""){
                return {
                    ...state,
                    operation : action.payload.label,
                    switch : true,
                    result : calcResult(state).toString(),
                    a : calcResult(state).toString(),
                    b : ""
                }
            }else{
                return {
                    ...state,
                    operation : action.payload.label,
                    switch : true
                }
            }
        
        case "RESULT" :
            return{
                ...state,
                result : calcResult(state).toString(),
                a: "",
                b : "",
                operation : "",
                switch : false
            }
        
        case "RESET":
            return initialState;

        default:
            return state;
    }
}

function useCalcReducer(){
    return useReducer(reducer, initialState)
}

export default useCalcReducer