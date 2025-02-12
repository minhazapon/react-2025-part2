import { useState } from "react"
import DisplayValue from "./DisplayValue"
import InputValue from "./InputValue"

function LiftState() {

    const [inputs, setInputs] = useState("")

    return (
        <div className=" flex justify-center items-center gap-5 m-20 bg-black text-white p-32 ">
            <InputValue inputs={inputs} setInputs={setInputs}></InputValue>
            <DisplayValue inputs={inputs}></DisplayValue>
        </div>
    )
}

export default LiftState
