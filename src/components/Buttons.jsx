import Button from "./Button"
import useCalcContext from "../context/CalcContext"

function Buttons() {
    const { state, dispatch } = useCalcContext()

    function addNumber(label) {
        dispatch({
            type: "ADD_NUMBER",
            payload: {
                label,
            }
        })
    }

    function addOperator(label) {
        dispatch({
            type: "OPERATION",
            payload: {
                label,
            }
        })
    }

    function calcResult() {
        dispatch({
            type: "RESULT"
        })
    }

    function reset() {
        dispatch({
            type: "RESET"
        })
    }

    return (
        <div className="button-calculator">
            <Button label={"9"} func={addNumber} />
            <Button label={"8"} func={addNumber} />
            <Button label={"7"} func={addNumber} />
            <Button label={"6"} func={addNumber} />
            <Button label={"5"} func={addNumber} />
            <Button label={"4"} func={addNumber} />
            <Button label={"3"} func={addNumber} />
            <Button label={"2"} func={addNumber} />
            <Button label={"1"} func={addNumber} />
            <Button label={"0"} func={addNumber} />
            <Button label={"+"} func={addOperator} />
            <Button label={"-"} func={addOperator} />
            <Button label={"*"} func={addOperator} />
            <Button label={"="} func={calcResult} />
            <Button label={"CE"} func={reset} />
        </div>
    )
}

export default Buttons
