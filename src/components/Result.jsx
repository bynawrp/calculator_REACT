import useCalcContext from "../context/CalcContext"

function Result() {
    const { state: { result } } = useCalcContext()

    return (
        <div className="input-result">
            <input 
                id="result" 
                type="text" 
                name="result" 
                value={result} 
                readOnly
            />
        </div>
    )
}

export default Result
