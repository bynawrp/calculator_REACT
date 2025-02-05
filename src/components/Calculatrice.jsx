import ResultCalc from "./Result"
import Buttons from "./Buttons"

import "./style/style.scss"

function Calculatrice(){

    return(
        <div className="container-calculator">
            <ResultCalc/>
            <Buttons/>
        </div>
    )
}

export default Calculatrice