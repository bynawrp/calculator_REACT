import {createContext, useContext} from "react";
import useCalcReducer from "../reducer/CalcReducer.jsx";

const CalculateContext = createContext()

export function CalculateProvider({children}){
    const [state, dispatch] = useCalcReducer();
    return <CalculateContext.Provider value={{state, dispatch}}>{children}</CalculateContext.Provider>
}

function useCalcContext(){
    return useContext(CalculateContext)
}

export default useCalcContext